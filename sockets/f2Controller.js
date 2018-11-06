var app = require('express');
var router = app.Router();

module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log("CONNECTION2");
        socket.on('disconnect',function() {
          console.log("DISCONNECTION2");
        })
    });

    return router;
}
