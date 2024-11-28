const mongoose = require("mongoose");
const dotenv = require("dotenv");

// INITIALIZING PATH TO .CONFIG FILE
dotenv.config({ path: "./config.env" });

// dotenv.config({ path: '../.env' });

// const DB = process.env.DATABASE.replace("<username>", process.env.USER).replace(
//   "<password>",
//   process.env.PASSWORD
// );

mongoose
  .connect("mongodb+srv://pratyushksk:pratyush123@cluster1.hhs4l.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1")
  .then(function (i){
    console.log("Database Connected");
  })
  .catch(function (err) {
    console.log(err);
  });