const mongoose=require('mongoose');
const bcrypt = require("bcrypt");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique: true
    },
    password:{
        type:String,
        
    }
})

UserSchema.methods.createHash = async function (plainTextPassword) {

    // Hashing user's salt and password with 10 iterations,
    const saltRounds = 10;
  
    // First method to generate a salt and then create hash
    const salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(plainTextPassword, salt);
  
    // Second mehtod - Or we can create salt and hash in a single method also
    // return await bcrypt.hash(plainTextPassword, saltRounds);
  };
  
  // Validating the candidate password with stored hash and hash function
  UserSchema.methods.validatePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
  };




const User=mongoose.model('User',UserSchema);

module.exports=User;





// UserSchema.pre('save', async function (next) {
//     if (this.isModified('password')) {
//       const saltRounds = 10;
//       const salt = await bcrypt.genSalt(saltRounds);
//       this.password = await bcrypt.hash(this.password, salt);
//     }
//     next();
//   });
// With this middleware, every time a user document is saved or updated, it will automatically hash the password if it has been modified.