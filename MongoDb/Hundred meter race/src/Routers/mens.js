const express = require('express');
const router = new express.Router();
const MensRanking =require('../Models/mens');

router.get('/', (req,res)=>{
    res.send("hello from the server")
})


router.post('/mens',async(req,res)=>{

try{
    const addingRecord =  new MensRanking(req.body);
    const insertMen = await addingRecord.save();
    res.send(insertMen);
}catch(e){
    res.send(e)
}

})

router.get('/mens',async(req,res)=>{
    try{
        const rankData=await MensRanking.find({}).sort({'ranking':1});
        res.status(201).send(rankData);
    }
    catch(e){
        res.status(400).send(e)
    }
       
       
})

router.get('/mens/:id',async(req,res)=>{
   
       try{
        const _id =  req.params.id;
        const rankData=await MensRanking.findById(_id);
        res.status(201).send(rankData);
       } 
       catch(e){
        res.status(400).send(e)
       }
})

// for the update we use patch
router.patch('/mens/:id',async(req,res)=>{
   
    try{
     const _id =  req.params.id;
     const rankData=await MensRanking.findByIdAndUpdate(_id,req.body,{
        new:true
     });
     res.status(201).send(rankData);
    } 
    catch(e){
     res.status(500).send(e)
    }
})

//for delete by id
router.delete('/mens/:id', async(req,res)=>{
    try{
        const _id=req.params.id;
        const rankdata= await MensRanking.findByIdAndDelete(_id);
        res.status(201).send(rankdata);
    }
    catch(e){
        res.status(500).send(e)
    }
})


module.exports = router;