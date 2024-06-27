const mongoose=require('mongoose');
const validator=require('validator');
const bcrypt = require("bcrypt");

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Please provide a name"],
    },
    email:{
        type:String,
        required:[true, "Please provide an email"],
        unique: true,
        lowercase: true,
        validate:[validator.isEmail, "Please provide a valid email"]
    },
    password:{
        type:String,
        required:[true, "Please provide a password"],
        minlength: 8,
        select: false,
        
    },
    passwordConfirm:{
        type:String,
        required:[true, "Please confirm your password"],
        validate:{
            //This only works on CREATE and SAVE
            validator: function(el){
                return el===this.password;
            },
            message: "Passwords are not the same!"
        },
        passwordChangeAt: Date,
    }
});

UserSchema.pre('save', async function (next) {
    if(!this.isModified('password')) return next();

    this.password = await bcrypt.hash(this.password, 12);
    this.passwordConfirm = undefined;
});

UserSchema.methods.correctPassword=async function(candidatePassword,userPassword){
    return await bcrypt.compare(candidatePassword, userPassword);
};


UserSchema.methods.changedPasswordAfter=function(JWTTimestamp){
    if(this.passwordChangeAt){
        const changedTimestamp=parseInt(this.passwordChangeAt.getTime()/1000,10);
        return JWTTimestamp<changedTimestamp;
    }
    // False if no time stamp
    return false;
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