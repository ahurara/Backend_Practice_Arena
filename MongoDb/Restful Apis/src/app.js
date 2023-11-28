const express= require('express');
const app =express();
require('./db/conn');
const student=require('./models/student');

const port=process.env.PORT || 3000;
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello from the other side..!")
})

//create a new student
app.post('/students',(req,res)=>{
    console.log(req.body);
    const user= new student(req.body);
    user.save().then(()=>
    {res.status(201).send(user)}).catch((err)=>
    {res.status(400).send(err)});
   
})

app.listen(port,()=>{
    console.log(`conncection is succefull at port : ${port}`);
})