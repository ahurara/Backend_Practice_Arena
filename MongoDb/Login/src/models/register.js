const mongoose= require('mongoose');
const bcrypt= require('bcryptjs');
const jwt = require('jsonwebtoken');

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
    tokens : [{
        token:{
            type:String ,
            required:true
        }
    }]


})

// generating token 
EmployeeSchema.methods.generateAuthToken = async function (){
    try{
         const token = await jwt.sign({_id : this._id.toString()}  , process.env.SECRET_KEY)
         // inorder to add the token in the db
         this.tokens = this.tokens.concat({token : token});
         await this.save()
        return token;
    } 
    catch(err){
        res.send(err)
    }
}

// the following piece of code will run each time the data is going to save 
 

EmployeeSchema.pre('save' , async function(next){
    
    if(this.isModified('password')){
       // console.log(`pass before bycrypt :${this.password}`)
        this.password =await bcrypt.hash(this.password  , 10)
        this.confirmPaswword =await bcrypt.hash(this.password  , 10) 
       // console.log(`pass after bycrypt :${this.password}`)
    }
    
        next();
    
})

const register = new mongoose.model('Resgiter' , EmployeeSchema);

module.exports = register;