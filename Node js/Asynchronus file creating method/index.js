const { Console } = require("console")
const fs= require("fs")

// fs.writeFile("read.txt","Hello! how are you?",
// (err) =>{
//     console.log("FIle is created")
//     console.log(err)
// }
// )

//What is callback
// we pass them a function as an argument - a callback - 
// that gets called when that task completes. 
// The callback has an argument that tells you whether 
// the operation completed successfully.
// Now we need to say what to do when fs.writeFile 
// has completed (even if it's nothing), and start
// checking for errors.

// fs.appendFile("read.txt",". Here is new data",
// (err)=>{
//     console.log("Task is completed")
//     console.log(err)
// }
//)

// fs.readFile("read.txt","utf-8",(err,data) => {
//     console.log(data)
// }
// )