const { log } = require("console");
const fs= require("fs");
console.log(fs)


const os= require("os");
const user = os.userInfo();
console.log(user);
console.log(user.username)

fs.appendFile('greeting.text', "Hello My Name Is" + user.username + '!\n', ()=>{
    console.log("Azmi");
})