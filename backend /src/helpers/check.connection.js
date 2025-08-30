const mongoose = require('mongoose');
const countConnection =  () => {
    const numConnections = mongoose.connections.length;
    console.log(`Number of active connections: ${numConnections}`);
    return numConnections;
}

module.exports = countConnection;