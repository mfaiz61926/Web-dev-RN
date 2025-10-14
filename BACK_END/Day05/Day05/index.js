const http = require('http');

//  How to create a http server

console.log("I am first");

const server = http.createServer((req,res)=>{
   
    if(req.url==="/"){
        res.end("Hello Coder Army");
    }
    else if(req.url==="/about"){
        res.end("This is about Page");
    }
    else if(req.url==="/contact")
    {
        res.end("Contact info of user")
    }
    else{
        res.end("Page not Found");
    }
});

server.listen(4000, ()=>{
    console.log("Server running");
});

console.log("I am last");