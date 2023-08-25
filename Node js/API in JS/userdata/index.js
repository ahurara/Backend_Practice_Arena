const http=require('http');
const fs=require("fs");

const data=fs.readFileSync('E:/Nodejs/API in JS/userApi/user.json','utf-8')
    const objData=JSON.parse(data);


const server=http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello from home sides")
    }
    else if(req.url=="/about"){
        res.end("Hello from about")
    }
    else if(req.url=="/contact"){
        res.end("Hello from contact")
    }
    else if(req.url=="/userApi"){
        // fs.readFile('D:/MyPractice/Node js/Node JS practice/API in JS/userApi/user.json',"utf-8",(err,data)=>{
        //     console.log(data);
        //     const objData=JSON.parse(data);
        //     res.end(objData[0].name)
        // });
        // console.log(`${__dirname}`)
        res.writeHead(200,{"content-type":"application/json"})
        res.end(objData[2].name)
    }
    else{
        res.writeHead(404,{"Content-type":"text/html"});
        res.end("<h1>404 not found. Page does not exists<h1/>")
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening to the port 8000");
})