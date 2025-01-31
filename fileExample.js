//read file

const fs = require("fs");

fs.readFile("filename" , (error, data) => {
    if (error) {
        console.log("error");
        console.log(error);
    }else {
        console.log(data);
    }
}) ;