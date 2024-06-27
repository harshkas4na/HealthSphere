const User=require('../models/user');
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

const catchAsync=require('../utils/catchAsync');
const AppError = require('../utils/appError');

const signToken = id => {
  return jwt.sign({ id }, JWT_SECRET, {
    expiresIn: 3600,
  });
};


exports.handleLogin=catchAsync(async (req,res,next)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email}).select('+password');
    
    //check if user exists and password is correct  
    if (!user ||!(await user.correctPassword(password, user.password))) {
      
      return next(new AppError("Incorrect email or password", 401));
    } 

   //generate a token with user id and secret
   const token=signToken(user._id);

   res.status(200).json({
       status:'success',
       token
   })
    
})


exports.handleRegister=catchAsync(async(req,res)=>{
    const {name,email,password}=req.body;

    // Check if user already exists

    const newUser = new User({
        name,
        email
      });
  
      const hashedPassword = await newUser.createHash(password);
      newUser.password = hashedPassword;
  
      // Save newUser object to database
      await newUser.save();

      

      

      res.json({
            success:true,
            message: "User created successfully",
            user:newUser
      })
    

})




