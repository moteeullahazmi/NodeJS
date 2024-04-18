const express = require('express');
const route = express();
 
const MenuItem = require('./../models/MenuItem');


// Route for creating a new menuItem
route.post('/', async (req, res) => {
    try {
      const dataMenu = req.body;
      const newMenuItem = new MenuItem(dataMenu);
  
      // Save the new person to the database
      const response = await newMenuItem.save();
      console.log('Data saved:', response);
      res.status(200).json(response);
    } catch(err) {
      console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  
  
  
  // GET method to get the person
  route.get('/', async (req,res)=>{
    try{
      const data = await MenuItem.find();
      console.log("data fetched");
      res.status(200).json(data);
    }catch(err){
  
  console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  })
  
module.exports =  route
