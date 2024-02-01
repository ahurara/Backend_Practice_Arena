const express= require("express")
const app = express();
const router=require("./Router/login");
const path = require("path");
const hbs = require("hbs");

const static_path = path.join(__dirname, "../public");
app.use(express.static(static_path));

//used to get data from the front end (should be present eore the router) 
app.use(express.urlencoded({extended:false}))

app.use('/',router);

//used to get data from postman 
app.use(express.json())


app.set("view engine" , "hbs");
app.set("views", path.join(__dirname, "../templates/views")); 
hbs.registerPartials(path.join(__dirname, "../templates/partials"))

const port = process.env.PORT || 3000 ;

app.listen(port , ()=>{
    console.log(`Running sucessfully on port: ${port}`)
})