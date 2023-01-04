const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: '*'
});

app.get('/', (req, res) => {
  res.send('Hellooo');
});

app.get('/getNamespace', (req, res) => {
  const list = io._nsps;
  console.log(Object.keys(list));
  res.send('Hellooo');
});

app.get('/newRoom', (req, res) => {
  const nameSpace = io.of('Essai');
  nameSpace.on('connection', (socket) =>{
    console.log('namespace essai');
  })
  res.send('Hellooo');
});

io.on('connection', (socket) => {
    socket.on('essai', (msg)=> {
        console.log(msg);
    })
  console.log('a user connected');
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});
