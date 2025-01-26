const http = require('http');

const server = http.createServer((req , resp)=>{
    resp.write("<h1>This is working</h1>");
    resp.write("<p>this is a pharagraph</p>");
});

server.listen(1212);