const express = require('express');
const socket = require('../index');
const { randomNamespace } = require('../services/randomNamespace');
const { deleteNamespace } = require('../services/deleteNamespace');
const { addPlayerToRoom, addRoom, getCard, removePlayerToRoom, addScore, removeScore, getPlayers, checkPseudo, newGame, checkWinner } = require('../models/rooms');

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
        socket.on("addScore", (id, namespace, ms) => {
            io.emit("pauseGame");
            const time = new Date().getTime() 
            if (checkWinner(namespace, time)){
                const pseudo = addScore(id);
                io.emit("newUser", getPlayers(namespace));
                io.emit("messages", {pseudo: `${pseudo}`, reponse: 'good'});
                setTimeout(() => {
                    const obj = getCard(namespace);
                    io.emit("getCard", obj.carteToReturn, obj.nbCartesRestantes);
                }, 5000)
            }
        });
        socket.on("removeScore", (id, namespace) => {
            const pseudo = removeScore(id);
            io.emit("newUser", getPlayers(namespace));
            io.emit("messages", {pseudo: `${pseudo}`, reponse: 'bad'});
        })
        socket.on("changeMode", (mode) => {
            io.emit("changeMode", mode);
        })
    });
    res.send(`${namespace}`);
});

// router.post('/addScore', (req, res) => {
//     const id = req.body.id;
//     addScore(id);
// })

router.get('/getCard', (req, res) => {
    const roomName = req.query.roomName;
    const obj = getCard(roomName);
    socket.io.of(roomName).emit("getCard", obj.carteToReturn, obj.nbCartesRestantes);
    res.json(obj.carteToReturn);
})

router.get('/newGame', (req, res) => {
    const roomName = req.query.roomName;
    const players = newGame(roomName)
    socket.io.of(roomName).emit("newGame", players);
    res.json("new Game");
})


module.exports = router;