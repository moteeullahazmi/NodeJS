const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/chicken', function (req, res) {
    res.send('Hello chicken ')
  })

  app.get("/adress", function(req,res){
    var adress ={
        name:"Moteeullah Azmi",
        Roll:16,
        Country: "Indian y"
    }
    res.send(adress)
  })

app.listen(3000,()=>{
    console.log("Active")
})