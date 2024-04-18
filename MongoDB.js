const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const MenuItem = require('./models/MenuItem')
const db = require('./db')

const app = express();

// Connect to MongoDB using Mongoose


// goose.connect('mongodb://localhost:27017/hot', {
//   useNewUrlParmonser: true,
//   useUnifiedTopology: true
// })
// .then(() => console.log('MongoDB Connected'))
// .catch(err => console.log(err));

// Middleware for parsing JSON bodies
app.use(bodyParser.json());

// Route for home page
app.get('/', (req, res) => {
  res.send("Welcome to Home Page");
});




// Import router person
const route = require('./Routes/personRoutes')

// import menu item 
const menuItemazmi = require('./Routes/menuItemRoutes')


app.use("/person",route)
app.use("/menu", menuItemazmi)

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
