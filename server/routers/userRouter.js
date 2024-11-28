const express=require('express');
const { createTeam,joinTeam, verifyTeam,info,login,TeamSubmit,fetchTeams,testing } = require('../controllers/userFuncs');
const crypto=require('crypto');
const { protectlink } = require('../middleware/protectlink');
const path = require('path');


const userRouter=express.Router();

//JOIN or CREATE team button page
userRouter
.route('/fetch')
.post(fetchTeams)

userRouter
.route('/login')
.post(login)

userRouter
.route('/login/submit')
.post(TeamSubmit)




//CREATE team LEADER page
userRouter
.route('/create')
.post(createTeam)


//JOIN team CODE page
//PROTECTED BY protectlink middleware
userRouter
.route('/code')
.post(verifyTeam)



userRouter
.route('/info')
.post(info)




// userRouter
// .route('/test')
// .get(function(req,res){res.json({
//     message:path.join(__dirname,"../public")
// })})


//JOIN team MEMBER page
userRouter
.route('/:id')
.get(protectlink,function(req,res){res.sendFile()})
.post(joinTeam)











module.exports=userRouter;
