const AppError = require("../utils/appError");

module.exports= (err, req, res, next) => {
    err.statusCode=err.statusCode || 500;
    err.status=err.status || 'error';

    const handleCastErrorDB=err=>{
        const message=`Invalid ${err.path}: ${err.value}`;
        return new AppError(message,400);
    }
    const  handleDuplicateFieldsDB=err=>{
        const value=Object.values(err.keyValue);
       
        const message=`Duplicate field value: ${value}`;
        return new AppError(message,400);
    }
    const handleValidationErrorDB=err=>{
      
       const errors=Object.values(err.errors).map(el=>el.message);
       const message=`Invalid input data: ${errors.join(', ')}`;
       return new AppError(message,400);
       
    }

    const sendErrorDev= (err,res)=>{
    res.status(err.statusCode).json({
        status:err.status,
        error:err,
        message:err.message,
        stack:err.stack
    });
    }

    
    const sendErrorProd=(err,res)=>{
        // Operational, trusted error: send message to client
        

        if(err.isOperational){
            
            res.status(err.statusCode).json({
                status:err.status,
                message:err.message
            });
        }else{
            // Programming or unknown error: don't leak error details
            
            res.status(500).json({
                status:'error',
                message:'Something went very wrong!'
            });
        }
        
    }


    if(process.env.NODE_ENV === 'development'){
        console.error("development error");
        sendErrorDev(err,res);

    }else if(process.env.NODE_ENV === 'production'){
        
        let error={...err};

        if(error.name==='CastError'){
           error=handleCastErrorDB(error);
        }

        if(error.code==11000){
            error=handleDuplicateFieldsDB(error);
        }

        if(error.name="ValidationError"){
           error=handleValidationErrorDB(error);
        }

        sendErrorProd(error,res);
    }



   

    // next(err);
}