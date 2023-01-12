const express = require('express');
const app = express();
require('dotenv').config()
const http = require('http');
const cors = require('cors');
const path = require('path');
const server = http.createServer(app);
const { Server } = require("socket.io");
const router = require('./routes/router.js');
const io = new Server(server, {
    cors: '*',
    transports: ["websocket"]
});
module.exports.io = io;

app.use(cors());
app.use('/api', router);

if(process.env.NODE_ENV !== 'development') {
    app.use(express.static('public/dist'));
    app.use(express.json());
    app.get('/*', function(req,res) {
        res.sendFile('index.html', { root: path.join(__dirname, './public/dist/') });
    });
}

server.listen(3000, () => {
  console.log('listening on *:3000');
});

