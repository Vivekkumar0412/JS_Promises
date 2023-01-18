let fs = require("fs")
let express = require("express");
let app = new express();
let data = fs.readFileSync("index.html","utf-8");
// let popup = require('popups');
app.get("",(req,res)=>{
    res.send(data);
}).listen(5900);