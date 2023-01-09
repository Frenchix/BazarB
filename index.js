const express = require('express');
const app = express();
const http = require('http');
const cors = require('cors');
const server = http.createServer(app);
const { Server } = require("socket.io");
const router = require('./routes/router.js');
const io = new Server(server, {
    cors: '*'
});
module.exports.io = io;

app.use(cors());
app.use(router);

server.listen(3000, () => {
  console.log('listening on *:3000');
});

