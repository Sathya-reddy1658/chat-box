const http = require("http");
const express = require('express');
const {Server}= require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server);


//socket.io
io.on("connection", (socket) => {
    socket.on("user-message",message=>{
        io.emit("message",message);
    });
  });




const path = require('path');
app.use(express.static(path.resolve("./public")));

app.get("/",(req,res)=>{
    res.render("/public/index.html");
})

server.listen(9000,()=>{console.log(`server started at 9000`);})