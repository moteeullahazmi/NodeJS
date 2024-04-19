const mongoose = require("mongoose");
require('dotenv').config();

// Define the MongoDB connection URL
const mongoURL = process.env.MONGO_URL;

// Setup MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true, // Deprecated, but harmless
    useUnifiedTopology: true // Deprecated, but harmless
});

// Get the default connection
const db = mongoose.connection;

db.on('connected', () => {
    console.log("MongoDB connection Connected");
});

db.on('error', (err) => {
    console.log("MongoDB connection Error:", err);
});

db.on('disconnected', () => {
    console.log("MongoDB connection Disconnected");
});

// Export database 
module.exports = db;
