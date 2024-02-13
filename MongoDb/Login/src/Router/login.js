const express = require("express");
const router = new express.Router();
require("../db/conn");
const register = require('../models/register');
const brypt= require('bcryptjs');
const auth = require("../Middleware/auth");
router.get('/' , (req , res)=>{
    res.render("index")
})

router.get('/register', (req,res)=>{
 res.render('register')
})

router.post("/register", async(req,res)=>{
  try{
    
    const password = req.body.password;
    const confirmPassword= req.body.confirmpassword;
    if(password == confirmPassword)
    {
        const registerEmployee = new register({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            age : req.body.age,
            gender : req.body.gender,
            password : password,
            confirmPaswword : req.body.confirmpassword,
        })

      const token = await registerEmployee.generateAuthToken();
      console.log(token);
      res.cookie('JWT', token)  
        const registered= await registerEmployee.save();
        res.render('index')
    }
    else{
        res.send("password not matched")
    }


  }catch(e){
    console.error(e); // Log the error to the console
    res.status(500).send(`Error: ${e.message}`);
  }
})

router.get('/login' , async(req , res)=>{
    res.render("login")
})



router.get('/authorized',auth,async(req,res) =>{
   
    res.render("AuthorizedPage")
    
})  


router.post('/login' , async(req,res)=>{
    try{
        const email = req.body.email;
        const password = req.body.password;
        const userDetail= await register.findOne({email:email});
        
        if (!userDetail) {
            return res.send("User not found");
        }
        const isMatch = await brypt.compare(password , userDetail.password);

        const token = await userDetail.generateAuthToken();
       // console.log(token);
        res.cookie('jwtToken',token)
        //console.log(`cookie stores : ${req.cookies.jwtToken}`)
        if(isMatch){
                res.render('profile')
        }
        else{
            res.send("Invalid password")

        }
    }
    catch(e){
        res.status(400).send(`Error :${e}`)
    }
})

module.exports = router;