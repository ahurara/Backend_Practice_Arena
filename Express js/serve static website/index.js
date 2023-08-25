const express=require("express");
const path=require("path");
const app=express();
const hbs=require("hbs");

const port=8000;

//this is for the simple static page
const staticPath=path.join(__dirname,'/public/weather_app/build');

//customizing the name of view
const dynamicPath=path.join(__dirname,'/templates/views');
const dynamicPaths=path.join(__dirname,'/templates/partials');

app.set("view engine","hbs");
app.set("views",dynamicPath);
hbs.registerPartials(dynamicPaths);



//builtin middleware
//app.use(express.static(staticPath));



//
app.get('/',(req,res)=>{
    res.render('index',{
        h2:'professions',
        product1:"web development",
        product2:"graphic design",
        product3:"ETC"
    })
})

app.get('/about',(req,res)=>{
    res.render('abouts')
})

//dynamically show the error page 
app.get("*",(req,res)=>{
    res.render("error")
})

app.listen(port,()=>{
    console.log(staticPath);
    console.log(`listening to port :${port}`)
})