// const mongoose=require("mongoose");

// mongoose.connect("mongodb://localhost:27017/champ", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
// .then(()=>{console.log("connection successfull...");})
// .catch((err)=>{console.error(err);});


const mongoose = require("mongoose");
const { boolean } = require("webidl-conversions");

mongoose
  .connect("mongodb://127.0.0.1:27017/chammp", {
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
    name: String,
    ctype: String,
    videos: Number,
    aurther: String,
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
// createMultipleDocuments();

const getDocument=async()=>{
  const data=await Playlist
  .find({$not:[ {ctype:'backend'} , {videos:60} ] })
  .select({_id:0});
  console.log(data);
}

getDocument();