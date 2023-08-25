const path=require('path');
const express=require("express");
const app=express();



const staticPath=path.join(__dirname,'../public');

//builtin middleware
app.use(express.static(staticPath));

app.get("/" , (req,res)=>{
    res.send("<h1>hello world from the express</h1>");
});

app.get("/about" , (req,res)=>{
    res.send("<h1>hello world from the express but in about page</h1>");
});

app.get('/api',(req,res)=>{

   res.json( [{
        id:1,
        name:"hurara"
    },
    {
        id:2,
        name:'willy'
    }]);
res.end();

});

app.listen(8000,()=>{
    console.log("listening port");
});