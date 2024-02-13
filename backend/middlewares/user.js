

async function checkForAuthentication(req,res,next){
    const userUid=req.headers["Authorization"];

    req.user=null;
    if(!userUid) return next();
    const token=userUid.split("Bearer ")[1];
    if(!token) return next();    //if no token then next() to null req
    
    const user=jwt.verify(token,secret);             
           

    req.user=user;      //if present then user set to be that user
    return next();         //and req. ko agge badhne do
}

module.exports={checkForAuthentication};