// const mongoose=require("mongoose");

// mongoose.connect("mongodb://localhost:27017/champ", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// .then(()=>{console.log("connection successfull...");})
// .catch((err)=>{console.error(err);});


const mongoose = require("mongoose");
const validator=require("validator");
const { boolean } = require("webidl-conversions");

mongoose.connect("mongodb://127.0.0.1:27017/chammp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection successful...");
  })
  .catch((err) => {
    console.error("Connection failed:", err);
  });

//   defining schema for the database

const playListSchema=new mongoose.Schema({
    name: {
      type: String,
      required : true,
      unique:true,
      uppercase: true,
      minLength: 4,
      maxLength:20,
      trim:true, //spaces before the name and after will not be considered in the count

    },
    ctype: {
      required:true,
      type:String,
      lowercase:true,
      enum:['frontend','backend','database']//The type is valid if it matches one of these elements.
    },
    videos: {
      type:Number,
      //custom validation
      validate(value){
        if(value < 0){
          throw new Error('Value should be greater than zero');
        }
      }
    },
    aurther: String,
    email:{
      type:String,
      required:true,
      unique:true,
      //custom validtation using npm package
      validate(value){
        if(!validator.isEmail(value))
        {
          throw new Error("invalid email id");
        }
      }
    },
    active: Boolean,
    date:{
        type: Date,
        default:Date.now
    }
})

const Playlist=new mongoose.model("PlayList", playListSchema);

//it create a sinle document
const createDocument=async ()=>{

    const reactPlayList=new Playlist({
        name: "react",
        ctype: "back end",
        videos: 90,
        aurther: "thapa",
        active: true,
       
    })
    
    const result =await reactPlayList.save()
    console.log(result);
}

// createDocument();

//creatin multipe documents
const createMultipleDocuments=async ()=>{
    const mongodb=new Playlist({
        name: "mongodb",
        ctype: "database",
        videos: 90,
        aurther: "thapa",
        active: true,
       
    })

    const nodejs=new Playlist({
        name: "nodejs",
        ctype: "backend",
        videos: 90,
        aurther: "thapa",
        active: true,
       
    })

    const result =await Playlist.insertMany([mongodb,nodejs]);
    console.log(result);
}
//callin the ollwin method will insert the data


//my custom method to add a document to check the validation
const insert =async(record)=>{
  const result =await record.save();
}

const record=new Playlist({
  name:'jass',
  ctype:'backend',
  aurther:'champ',
  videos:80,
  email:'hurrerahchamp57@gmail.com',
  active:true
})

// createMultipleDocuments();

const getDocument=async()=>{
  const data=await Playlist
  .find()
 // .select({name:1})
  .sort({name : - 1})
  // .count()

  console.log(data);
}
 


// for update
const updateDocument=async(name)=>{
  try{
    const result = await Playlist.updateOne({name :name},
      {
        $set :{
          name : "idont"
        }
      },{
        new:true,
        useFindAndModify : false
      }
      );
      console.log(result);
  }
  catch(err){
    console.log(err)
  }
}


//for delete
const deleteDocument=async(_id)=>{
const result = await Playlist.deleteOne({_id : _id})
console.log(result)
}

//  deleteDocument('64f99ef81843a2b822bba531');
// updateDocument('react');
//insert(record);
getDocument();