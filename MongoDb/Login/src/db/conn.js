const mongoose= require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/olympics',{ 
}).then(()=>{
    console.log("conncection successfull")
}).catch((e)=>{
    console.log(e)
})