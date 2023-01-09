const express = require('express');
const socket = require('../index');
const { randomNamespace } = require('../services/randomNamespace');
const { deleteNamespace } = require('../services/deleteNamespace');
const { addRoom, addPlayerToRoom, removePlayerToRoom, addScore, removeScore, getPlayers } = require('../models/rooms');

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hellooo');
});
  
router.get('/getNamespace', (req, res) => {
    const list = socket.io._nsps;
    console.log(socket.io._nsps.keys());
    list.forEach(async element => {
        const sockets = await socket.io.of(element.name).fetchSockets();
        // console.log(sockets);
    })
    res.send('Hellooo');
});
  
router.get('/deleteNamespace', (req, res) => {
      // disconnect all sockets from this namespace
      socket.io.of('7okKgTgD').local.disconnectSockets();
  
      // remove the namespace
      socket.io._nsps.delete('/Essai');
      res.send('Hellooo');
});
  
router.get('/newNamespace', (req, res) => {
    const namespace = randomNamespace();
    const io = socket.io.of(namespace);
    addRoom(namespace);
    io.on('connection', (socket) => {
        // socket.on('essai', (msg)=> {
        // console.log(msg);
        // })
        console.log('user connected');
        // socket.on('userLeft', function(){
        //     console.log("userLeft");
        // });
        socket.on("disconnect", async function() {
            console.log("A user with ID: " + socket.id + " disconnected");
            if (socket.nsp.sockets.size === 0) {
                
                deleteNamespace(namespace);
            }
        });
        socket.on("newUser", function(pseudo) {
            addPlayerToRoom(namespace, pseudo);
            socket.emit("newUser", getPlayers(namespace));
        });
    });
    res.send(`${namespace}`);
});

module.exports = router;