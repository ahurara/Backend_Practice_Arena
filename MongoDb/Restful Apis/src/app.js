const express= require('express');
const app =express();
require('./db/conn');
const student=require('./models/student');
const studentRouter=require('./routers/student')

const port=process.env.PORT || 3000;

app.use(express.json())
app.use(studentRouter);

app.listen(port,()=>{
    console.log(`conncection is succefull at port : ${port}`);
})