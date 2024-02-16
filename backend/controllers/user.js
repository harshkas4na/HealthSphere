const User=require('../models/user');
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function handleLogin(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({email});
    

    if (user === null) {
      return res.status(400).json({
        success:false,
        reason:"1",  //reason 1 is You Do not Have a account
        message: "User not found.",
      });
    } else {
      if (await user.validatePassword(password)) {
        const userId = user._id;
        const token = jwt.sign({
          userId
        }, JWT_SECRET);
        return res.status(200).json({
          success:true,
          token: token,
          user:user,
          message: "User Successfully Logged In",
        });
      } else {
        return res.status(400).json({
          success:false,
          reason:"2",  //reason 2 is You Entered Wrong Password
          message: "Incorrect Password",
        });
      }
    }
}


async function handleRegister(req,res){
    const {name,email,password}=req.body;

    const existingUser = await User.findOne({email})

    if (existingUser) {
        return res.status(411).json({
            success:false,
            message: "Email already taken"
        })
    }

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
    

}





module.exports={handleLogin,handleRegister}