const express = require('express');
const socket = require('../index');
const { randomNamespace } = require('../services/randomNamespace');
const { deleteNamespace } = require('../services/deleteNamespace');
const { addPlayerToRoom, addRoom, getCard, removePlayerToRoom, addScore, removeScore, getPlayers, checkPseudo } = require('../models/rooms');

const router = express.Router();
let player = {};

router.get('/', (req, res) => {
    res.send('Hellooo');
});
  
router.get('/getNamespace', (req, res) => {
    const list = socket.io._nsps;
    console.log(socket.io._nsps.keys());
    list.forEach(async element => {
        const sockets = await socket.io.of(element.name).fetchSockets();
        console.log(sockets);
    })
    res.send('Hellooo');
});

router.get('/checkPseudo', (req, res) => {
    const pseudo = req.query.pseudo;
    const roomName = req.query.roomName
    const newPseudo = checkPseudo(roomName, pseudo);
    res.send(newPseudo);
});
  
router.get('/newNamespace', (req, res) => {
    const namespace = randomNamespace();
    addRoom(namespace);
    const io = socket.io.of(namespace);
    io.on('connection', (socket) => {
        console.log('user connected');
        socket.on("disconnect", async function() {
            console.log("A user with ID: " + socket.id + " disconnected");
            if (socket.nsp.sockets.size === 0) {
                deleteNamespace(namespace);
            }
            removePlayerToRoom(socket.id)
            io.emit("newUser", getPlayers(namespace));
        });
        socket.on("newUser", function(namespace, pseudo) {
            player.id = socket.id
            player.pseudo = pseudo
            addPlayerToRoom(namespace, player);
            io.emit("newUser", getPlayers(namespace));
        });
        socket.on("addScore", (id, namespace) => {
            addScore(id);
            io.emit("newUser", getPlayers(namespace));
        })
        socket.on("removeScore", (id, namespace) => {
            removeScore(id);
            io.emit("newUser", getPlayers(namespace));
        })
    });
    res.send(`${namespace}`);
});

router.post('/addScore', (req, res) => {
    const id = req.body.id;
    addScore(id);
})

router.get('/getCard', (req, res) => {
    const roomName = req.query.roomName;
    const card = getCard(roomName);
    socket.io.of(roomName).emit("getCard", card);
    res.json(card);
})

module.exports = router;