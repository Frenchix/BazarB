const socket = require('../index');

module.exports = {
    deleteNamespace: function(namespace) {
        socket.io._nsps.delete(`/${namespace}`);
    }
}