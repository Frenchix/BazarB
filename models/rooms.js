const players = [];

// function addRoom(name) {
//     rooms.push({
//         name: name,
//         players: []
//     });
//     console.log(rooms);
// }

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

module.exports = { addPlayerToRoom, removePlayerToRoom, addScore, removeScore, getPlayers, checkPseudo };