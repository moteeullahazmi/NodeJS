const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();
const passport = require('./auth')

const Person = require('./models/empolayee');
const db = require('./db');

const app = express();

// Connect to MongoDB using Mongoose
mongoose.connect(process.env.MONGO_URL_LOCAL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Connected'))
.catch(err => console.error('MongoDB Connection Error:', err));

// Middleware for parsing JSON bodies
app.use(bodyParser.json());



// Middleware
const applog = (req, res, next) => {
  console.log(`[${new Date().toLocaleDateString()}] Request Made to : ${req.originalUrl}`);
  next();
};
app.use(applog);

// Route for home page with authentication
const localMiddle =passport.authenticate('local', { session: false });
app.get('/',(req, res) => {
  res.send("Welcome to Home Page");
});

// Import router for persons
const route = require('./Routes/personRoutes');
// Import router for menu items
const menuItemRoutes = require('./Routes/menuItemRoutes');

app.use("/person", route);
app.use("/menu",localMiddle, menuItemRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
