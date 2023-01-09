const rooms = [];

function addRoom(name) {
    rooms.push({
        name: name,
        players: []
    });
    console.log(rooms);
}

function addPlayerToRoom(roomName, newPlayer) {
    const index = rooms.findIndex((element) => element.name ==roomName);
    console.log("index", index);
    rooms[index].players.push({
        pseudo: newPlayer,
        score: 0
    });
    console.log(rooms[0].players);
}

function removePlayerToRoom(roomName, player) {
    const index = rooms.findIndex((element) => element.name === roomName);
    const indexPlayer = rooms[index].players.findIndex((element) => element.pseudo === player);
    rooms[index].players.splice(indexPlayer, 1);
}

function addScore(roomName, player) {
    const index = rooms.findIndex((element) => element.name === roomName);
    const indexPlayer = rooms[index].players.findIndex((element) => element.pseudo === player);
    rooms[index].players[indexPlayer].score++;
}

function removeScore(roomName, player) {
    const index = rooms.findIndex((element) => element.name === roomName);
    const indexPlayer = rooms[index].players.findIndex((element) => element.pseudo === player);
    rooms[index].players[indexPlayer].score--;
}

function getPlayers(roomName) {
    const index = rooms.findIndex((element) => element.name === roomName);
    return rooms[index].players;
}

module.exports = { addRoom, addPlayerToRoom, removePlayerToRoom, addScore, removeScore, getPlayers };