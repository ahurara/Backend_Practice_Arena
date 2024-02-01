const mongoose= require('mongoose');

const EmployeeSchema = new mongoose.Schema({
    firstname:{
        type : String,
        required: true
    },
    lastname:{
        type : String,
        required: true
    },
    email:{
        type : String,
        required: true,
        unique: true
    },
    age:{
        type : Number,
        required: true
    },
    gender:{
        type : String,
        required: true
    },
    password:{
        type : String,
        required: true
    },
    confirmPaswword:{
        type : String,
        required: true
    },


})


const register = new mongoose.model('Resgiter' , EmployeeSchema);

module.exports = register;