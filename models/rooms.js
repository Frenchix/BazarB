const { randomInt } = require('../services/randomInt');
const cartes = require('./cartes');

const players = [];
const rooms = [];

function addRoom(name) {
    rooms.push({
        name: name,
        cartes: [...cartes]
    });
}

function getCard(roomName) {
    const index = rooms.findIndex((element) => element.name === roomName);
    if (rooms[index].cartes.length > 0) {
        const carte = randomInt(rooms[index].cartes.length);
        const carteToReturn = rooms[index].cartes[carte]
        rooms[index].cartes.splice(carte, 1);
        return carteToReturn;
    } else {
        return "Fin";
    }
    
}

function resetCard(roomName) {
    const index = rooms.findIndex((element) => element.name === roomName);
    rooms[index].cartes = [...cartes];
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
    const indexPlayer = players.findIndex((element) => element.id === id);
    players[indexPlayer].score++;
    return players[indexPlayer].pseudo;
}

function removeScore(id) {
    const indexPlayer = players.findIndex((element) => element.id === id);
    players[indexPlayer].score--;
    return players[indexPlayer].pseudo;
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

module.exports = { addRoom, getCard, resetCard, addPlayerToRoom, removePlayerToRoom, addScore, removeScore, getPlayers, checkPseudo, newGame };