const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Person = require('./models/empolayee');
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

// Route for creating a new person
app.post('/person', async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);

    // Save the new person to the database
    const response = await newPerson.save();
    console.log('Data saved:', response);
    res.status(200).json(response);
  } catch(err) {
    console.log(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET method to get the person
app.get('/person', async (req,res)=>{
  try{
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  }catch(err){

console.log(err);
    res.status(500).json({ error: 'Internal server error' });


  }
})

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
