const {User}=require('../models/user');
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");

async function handleLogin(req,res){
    const {email,password}=req.body;
    const user=await User.findOne({email});
    

    if (user === null) {
      return res.status(400).json({
        success:false,
        message: "User not found.",
      });
    } else {
      if (await user.validatePassword(password)) {
        return res.status(200).json({
          success:true,
          message: "User Successfully Logged In",
        });
      } else {
        return res.status(400).json({
          success:false,
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

      const userId = newUser._id;

      const token = jwt.sign({
            userId
        }, JWT_SECRET);

      res.json({
            message: "User created successfully",
            token: token
        })
    

}





module.exports={handleLogin,handleRegister}