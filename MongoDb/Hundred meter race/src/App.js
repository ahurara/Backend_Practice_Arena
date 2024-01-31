const express = require("express");
require('./DB/conn');
const router = require('./Routers/mens');

const app = express();  


const port = process.env.PORT || 3000;

app.use(express.json());
app.use(router);

app.listen(port, ()=>{
    console.log(`connection is live at port : ${port}`)
})