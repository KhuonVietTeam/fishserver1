var app = require('express');
var router = app.Router();

module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log("CONNECTION");

        socket.on('gamemachinestatus',function(msg){
          console.log(msg);
          if (msg.data === "True") {
            socket.broadcast.emit('gamemachinestatus',{data:"True"});
          }
          else {
            socket.broadcast.emit('gamemachinestatus',{data:"False"});
          }
        })

        socket.on('disconnect',function() {
          console.log("DISCONNECTION");
        })
    });

    return router;
}
