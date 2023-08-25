// The http.createServer() method includes request and response parameters which is supplied by Node.js.
// The request object can be used to get information about the current HTTP request  e.g., url, request header, and data.
// The response object can be used to send a response for a current HTTP request.
// If the response from the HTTP server is supposed to be displayed as HTML,  you should include an HTTP header with the correct content type:
const http=require("http");

const server =http.createServer((req,res)=>{
    res.write("Hello from the others sides");
    res.end();
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});
//----------------------------ooper wala thapa technical ka method hay aur neechay wala kisi aur youtuber ka uska link bhi diya hua hay
//https://youtu.be/VShtPwEkDD0
// const fs=require('fs');
// const port=3000
// const server =http.createServer((req,res)=>{
//     // res.end("Hello from the others sides");
//     res.writeHead(200,{'Content-Type':'text/html'})
//     fs.readFile('index.html',function(error,data){
//         if(error){
//             res.writeHead('404')
//             res.write('Error: File Not Found')
//         }
//         else{
//             res.write(data);
//         }
//         res.end()
//     })
//     // res.write("Hello Node");

// });
// server.listen(port,function(error){
//     if(error){
//         console.log("Something went wrong: "+error)
//     }
//     else{
//         console.log("Server is listening to port: "+port)
//     }
// })
