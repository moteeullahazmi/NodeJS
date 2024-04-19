const mongoose = require('mongoose');
require('dotenv').config();

// Check the value of the environment variable
console.log('MongoDB URL:', process.env.MONGO_URL_LOCAL);

// Define the MongoDB connection URL
const mongoURL = process.env.MONGO_URL_LOCAL;
// const mongoURL = process.env.MONGO_URL;

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB server');
})
.catch(error => {
    console.error('Error connecting to MongoDB:', error);
});

// Get the default connection
const db = mongoose.connection;

db.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Export the database connection
module.exports = db;
