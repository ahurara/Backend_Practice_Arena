const http=require("http");

const server =http.createServer((req,res)=>{
    if(req.url=="/"){
        res.end("Hello from the others sides");
    }
    else if(req.url=="/about"){
    res.end("Hello from the about sides");
    }
    else if(req.url=="/contact"){
        res.end("Hello from the contact sides");
    }
    else{
        res.writeHead(404,{"Content-type" :"text/html"})
        res.end("<h1>Page does not exist</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});
