const mongoose =require("mongoose");
require('dotenv').config()

// define the mongoDB connection URL
// const mongoURL = process.env.MONGO_URL_LOCAL
const mongoURL = process.env.MONGO_URL;
//hotel is the database name

// setup MongoDB connection
mongoose.connect(mongoURL)

//get the default connection
// Mongoose maintains a default connection object representing the MongoDB connection.
const db = mongoose.connection;

db.on('connected',()=>{
    console.log("MongoDB connection Connected");
});

db.on('error',(err)=>{
    console.log("MongoDB connection Error");
})

db.on('disconnected',()=>{
    console.log("MongoDB connection DisConnected");
});

// Export database 
module.exports =db;
