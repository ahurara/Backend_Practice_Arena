const fs=require("fs")

const bioData={
    name:"Amjad",
    age:26,
    subject:"Javascript"
};
// console.log(bioData.name);
// const jsondata=JSON.stringify(bioData);
// console.log(jsondata);

/*const objData=JSON.parse(jsondata);
console.log(objData);
console.log(objData.name);*/

// 1: convert to JSON 
// 2: dusre file me add krdena 
// 3: readfile 
// 4: again convert back to js obj ori 
// 5: console.log

//STep 1:
const jsondata=JSON.stringify(bioData);

//Step 2:
fs.writeFile('json1.json',jsondata,(err)=>{
    console.log("done"); 
});

//STep 3:
// fs.readFile('json1.json','utf-8',(err,data)=>{
//     console.log(data);
// })

//Step 4 and 5:
fs.readFile('json1.json','utf-8',(err,data)=>{
    const orgData=JSON.parse(data);
    console.log(data);
    console.log(orgData)
})