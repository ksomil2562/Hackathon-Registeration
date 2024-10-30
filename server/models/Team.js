const mongoose=require('mongoose');

const TeamSchema = mongoose.Schema({
    TeamName: {
        type: String,
        required: true,
        unique:[true,"Team Name already used by someone else"]
    },
    Members: {
        type: Array,
        required: true,
    },
    Password:{
        type:String,
        required:true,
        minLength:[8,"Password must contain at least 8 letters"]
    },
    Code: {
        type: String,
    },
    Submitted: {
        type: Boolean,
        default:false
    },
    female:{
        type: Boolean,
        default:false 
    },
    TechStack:{
        type: String,
    },
    PhoneNumber:{
        type: String,
    }
})
let Team = mongoose.model('Team', TeamSchema);

module.exports=Team;
