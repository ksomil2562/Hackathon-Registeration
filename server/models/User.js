const mongoose=require('mongoose');
const validator=require('email-validator')
const guild=require('discord.js')


const userSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true
    },
    Email:{
        type:String,   
        required:true,
        unique:true,
        validate:[function(){
            return validator.validate(this.Email);
        },"Invalid Email"]
    },
    Password:{
        type:String,
        required:true,
        minLength:[8,"Password must contain at least 8 letters"]
    },
    ConfirmPassword:{
        type:String,
        minLength:8,
        validate:[function(){                                                               
            //Confirming Password....
            return this.ConfirmPassword==this.Password;
        },"Password din't match..."]
    },
    PhoneNumber:{
        type:Number,
        required:true,
    },
    RollNumber:{
        type:Number,
        required:true,
        unique:[true,"Roll Number must be unique"]
    },
    Branch:{
        type:String,
        required:true,
    },
    Year:{
        type:String,
        required:true,
    },
    Role:{
        type:String,
        enum:['Leader','Member','Admin'],
        default:'Member'
    },
    Gender: {
        type: String,
        enum:['Male','Female'],
        required: true,
    },
    TeamName: {
        type: String,
    },
    TechStack: {
        type: String,
        required: true,
    }
})


userSchema.pre('save',function(){
    this.ConfirmPassword=undefined;
});



const User = mongoose.model('User', userSchema);

module.exports= User;