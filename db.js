const mongoose =require("mongoose");

// define the mongoDB connection URL
const mongoURL = "mongodb://localhost:27017/hotel"
//hotel is the database name

// setup MongoDB connection
mongoose.connect(mongoURL,{
    useNewURLParser: true,
    useUnifiedTopology:true
})

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
