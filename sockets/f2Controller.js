var app = require('express');
var router = app.Router();

module.exports = function(io) {
    io.on('connection', function(socket) {
        console.log("CONNECTION2");


        socket.on('PlayersScore',(msg)=>{
          console.log(msg);
          socket.broadcast.emit('PlayersScore',msg);
          // io.local.emit('Dat_PlayersScore',{"data":9999,"id":1})
        })

        socket.on('PlayersScore_Change',(msg)=>{
          console.log(msg);
          socket.broadcast.emit('PlayersScore_Change',msg);

        })

        socket.on('disconnect',function() {
          console.log("DISCONNECTION2");
        })
    });

    return router;
}
