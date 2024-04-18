const express = require('express');
const route = express();

const Person = require('./../models/empolayee');

// Route for creating a new person
route.post('/', async (req, res) => {
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
route.get('/', async (req,res)=>{
    try{
      const data = await Person.find();
      console.log("data fetched");
      res.status(200).json(data);
    }catch(err){
  
  console.log(err);
      res.status(500).json({ error: 'Internal server error' });
    }
  })

  // get to find diffrent type status
route.get('/:workType', async (req,res)=>{
  
    try{
      const workType = req.params.workType;
      if(workType=='chef' || workType=='owner' || workType=="manager"){
        const response = await Person.find({work:workType});
    console.log("data fectched");
    res.status(200).json(response)
    }else{
      console.log("data not fectched");
    res.status(404).json({error:'invalid work type'})
    } 
      }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
      }
    
  })

  route.put("/:id", async (req,res)=>{
    try{
        const personId =req.params.id;
        const updatePersonId = req.body; 
        const response = await Person.findByIdAndUpdate(personId,updatePersonId,{
            new:true,
            runValidators:true
        })

        if(!response){
            res.status(400).json({error:"person not found"})
        }
        console.log("updated")
        res.status(200).json(response)


    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }

  })

//   delete
route.delete("/:id", async (req,res)=>{
    try{
        const personId =req.params.id;
        
        const response = await Person.findByIdAndDelete(personId)

        if(!response){
            res.status(400).json({error:"person not found"})
        }
        console.log("updated")
        res.status(200).json({message:"person deleted successfully"})


    }catch(err){
        console.log(err)
        res.status(500).json({ error: 'Internal server error' });
    }

  })

  module.exports = route