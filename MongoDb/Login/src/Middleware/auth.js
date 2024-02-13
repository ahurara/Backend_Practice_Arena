const jwt= require("jsonwebtoken");
const Register = require("../models/register");


const auth = async(req, res, next)=>{

        try{

            const token = req.cookies.jwtToken;
            const verifyUser = jwt.verify(token ,  process.env.SECRET_KEY)
             console.log(req.cookies.JWT);
            next();

        }catch(err)
        {
            res.status(401).send(err)
        }
}

module.exports = auth;