const express= require('express');
const app =express();
require('./db/conn');
const student=require('./models/student');

const port=process.env.PORT || 3000;
app.use(express.json())

app.get('/',(req,res)=>{
    res.send("hello from the other side..!")
})

//create a new student using promise
// app.post('/students',(req,res)=>{
//     console.log(req.body);
//     const user= new student(req.body);
//     user.save().then(()=>
//     {res.status(201).send(user)}).catch((err)=>
//     {res.status(400).send(err)});
   
// })

//create a new student using async await
app.post('/student', async(req,res)=>{
 
    try{
        const user= new student(req.body);
        const createUser=await user.save();
        res.status(201).send(createUser);
    }
    catch(e){
        res.status(400).send(e);
    }
   
})

//to get the overall data

app.get("/student",async(req,res)=>{
    try{
        const studentData=await student.find();
        res.send(studentData);
    }
    catch(e){
        res.send(e);
    }
})

//to get the data based on id 

app.get("/student/:id" , async(req,res)=>{
    try{
        const _id=req.params.id;
        const studentData= await student.findById(_id);
        res.send(studentData);
    }
    catch(e){
        res.send(e)
    }
})

//delete the data by id
app.delete("/student/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const deleteStudnet= await student.findByIdAndDelete(_id);
        if(!req.params.id)
        {
            return res.status(400).send();
        }
        res.send(deleteStudnet);

    }
    catch(e){
        res.send(500).send(e);l
    }
})

app.patch("/student/:id",async(req,res)=>{
    try{
        const _id=req.params.id;
        const updateStudent= await student.findByIdAndUpdate(_id , req.body, {new:true});
        res.send(updateStudent);
    }
    catch(e){
        req.status(500).send(e);
    }
})

app.listen(port,()=>{
    console.log(`conncection is succefull at port : ${port}`);
})