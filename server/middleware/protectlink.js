const express=require('express')

const Team=require('../models/Team.js')
const User=require('../models/User.js')



module.exports.protectlink=async function protectlink(req,res,next){
    try {
        let Code=(req.params.id).substring(1)

        let team=await Team.findOne({Code:Code});

        if(team){
            next();
        }
        else{ 
        res.json({
            message:"Invalid URL",
        });
        }

    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
}

