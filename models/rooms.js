const { randomInt } = require('../services/randomInt');
const cartes = require('./cartes');

const players = [];
const rooms = [];

function addRoom(name) {
    rooms.push({
        name: name,
        cartes: [...cartes],
        nbTours: 0,
        timeWinner: 9999999999999999
    });
}

function checkWinner(roomName, time){
    console.log("time", time)
    const index = rooms.findIndex((element) => element.name === roomName);
    if (time < rooms[index].timeWinner){
        rooms[index].timeWinner = time;
        return true
    } else {
        return false
    }
}

function getCard(roomName) {
    const index = rooms.findIndex((element) => element.name === roomName);
    const obj = {};
    obj.nbCartesRestantes = rooms[index].cartes.length;
    if (obj.nbCartesRestantes > 0) {
        const carte = randomInt(rooms[index].cartes.length);
        obj.carteToReturn = rooms[index].cartes[carte]
        rooms[index].cartes.splice(carte, 1);
        rooms[index].timeWinner = 9999999999999999;
        return obj;
    } else {
        return "Fin";
    }
    
}

function resetCard(roomName) {
    const index = rooms.findIndex((element) => element.name === roomName);
    rooms[index].cartes = [...cartes];
    rooms[index].nbTours = 0;
    rooms[index].timeWinner = 9999999999999999;
    console.log("room", rooms[index])
}

function addPlayerToRoom(roomName, newPlayer) {
    players.push({
        room: roomName,
        pseudo: newPlayer.pseudo,
        score: 0,
        id: newPlayer.id
    })
}

function removePlayerToRoom(id) {
    const indexPlayer = players.findIndex((element) => element.id === id);
    players.splice(indexPlayer, 1);
}

function addScore(id) {
    console.log(id);
    const indexPlayer = players.findIndex((element) => element.id === id);
    if (indexPlayer == -1){
        return 'Strange'
    } else {
        players[indexPlayer].score++;
        return players[indexPlayer].pseudo;
    }
}

function removeScore(id) {
    console.log(id);
    const indexPlayer = players.findIndex((element) => element.id === id);
    if (indexPlayer == -1){
        return 'Strange'
    } else {
        players[indexPlayer].score--;
        return players[indexPlayer].pseudo;
    }
}

function getPlayers(roomName) {
    const playersArray = players.filter((element) => element.room === roomName);
    return playersArray;
}

function checkPseudo(roomName, pseudo) {
    const index = players.findIndex((element) => element.room === roomName && element.pseudo === pseudo);
    if (index !== -1){
        pseudo = pseudo + 1;
    }
    return pseudo;
}

function newGame(roomName) {
    resetCard(roomName)
    const playersArray = players.map((player) => {
        if (player.room === roomName) {
            player.score = 0
            return player
        }
    })
    return playersArray;
}

module.exports = { addRoom, getCard, resetCard, addPlayerToRoom, removePlayerToRoom, addScore, removeScore, getPlayers, checkPseudo, newGame, checkWinner };