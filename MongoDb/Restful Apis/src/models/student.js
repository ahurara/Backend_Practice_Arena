const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema= new mongoose.Schema({

    name:{
        type: String,
        required : true,
        minlength : 3
    },
    email :{
        type: String,
        required: true,
        unique:[true,"Email id already present"],
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid Email")
            }
        }
    },
    phone :{
        type: Number,
        required:true,
        unique: true ,
        min:11,
        
        },
        address:{
            type: String,
            required  : true,
        }

})


// lets create a collection

const student = new mongoose.model("student" , studentSchema);

module.exports = student;