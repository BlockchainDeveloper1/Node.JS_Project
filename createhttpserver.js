const http = require("http");

const server = http.createServer((req , resp)=>{
    //request processing --> req
    //for writing response --> resp
    resp.write("<h1>Create a file using js extension and run it </h1>");
    resp.write("<p> This is how we can create a localhost server </p>");
    resp.end("That's all");
});

server.listen(3000 , ()=>{console.log("Server is running on port 👉 3000 ")});


