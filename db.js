const mongoose = require("mongoose");
require('dotenv').config()

const mongoURL = process.env.MONGO_URL;

mongoose.connect(mongoURL, {
  useNewUrlParser: true, // Use new URL parser
  useCreateIndex: true, // Use createIndex instead of ensureIndex
  useFindAndModify: false, // Use findOneAndUpdate instead of findAndModify
  // Omit useUnifiedTopology as it's deprecated and has no effect
});

const db = mongoose.connection;

db.on('connected', () => {
  console.log("MongoDB connection Connected");
});

db.on('error', (err) => {
  console.error("MongoDB connection Error:", err);
});

db.on('disconnected', () => {
  console.log("MongoDB connection Disconnected");
});

module.exports = db;
