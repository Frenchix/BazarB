const { randomInt } = require('../services/randomInt');

const players = [];
const rooms = [];

function addRoom(name) {
    rooms.push({
        name: name,
        cartes: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99]
    });
}

function removeCard(roomName) {
    const index = rooms.findIndex((element) => element.name === roomName);
    const cartes = randomInt(rooms[index].cartes.length);
    rooms[index].cartes.splice(cartes, 1);
}

function resetCard(roomName) {
    const index = rooms.findIndex((element) => element.name === roomName);
    rooms[index].cartes = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];
}

function addPlayerToRoom(roomName, newPlayer) {
    // const index = rooms.findIndex((element) => element.name ==roomName);
    // console.log("index", index);
    // rooms[index].players.push({
    //     pseudo: newPlayer,
    //     score: 0
    // });
    players.push({
        room: roomName,
        pseudo: newPlayer.pseudo,
        score: 0,
        id: newPlayer.id
    })
    console.log(players);
}

function removePlayerToRoom(id) {
    // const index = rooms.findIndex((element) => element.name === roomName);
    // const indexPlayer = rooms[index].players.findIndex((element) => element.pseudo === player);
    // rooms[index].players.splice(indexPlayer, 1);
    const indexPlayer = players.findIndex((element) => element.id === id);
    players.splice(indexPlayer, 1);
}

function addScore(id) {
    // const index = rooms.findIndex((element) => element.name === roomName);
    // const indexPlayer = rooms[index].players.findIndex((element) => element.pseudo === player);
    // rooms[index].players[indexPlayer].score++;
    const indexPlayer = players.findIndex((element) => element.id === id);
    players[indexPlayer].score++;
}

function removeScore(id) {
    // const index = rooms.findIndex((element) => element.name === roomName);
    // const indexPlayer = rooms[index].players.findIndex((element) => element.pseudo === player);
    // rooms[index].players[indexPlayer].score--;
    const indexPlayer = players.findIndex((element) => element.id === id);
    players[indexPlayer].score--;
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

module.exports = { addRoom, removeCard, resetCard, addPlayerToRoom, removePlayerToRoom, addScore, removeScore, getPlayers, checkPseudo };