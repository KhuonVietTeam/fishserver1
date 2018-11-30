var app = require('express');
var router = app.Router();

module.exports = function(io) {
    io.on('connection', function(socket) {

        socket.on('mobileAppConnected',()=>{
          socket.broadcast.emit('mobileAppConnected');
        })
        socket.on('PlayersScore',(msg)=>{
          console.log("PlayersScore");
          console.log(msg);
          socket.broadcast.emit('PlayersScore',msg);
          // io.local.emit('Dat_PlayersScore',{"data":9999,"id":1})
        })
        socket.on('PlayersScore_Update',(msg)=>{
          console.log("PlayersScore_Update");
          console.log(msg);
          socket.broadcast.emit('PlayersScore_Update',msg);
          // io.local.emit('Dat_PlayersScore',{"data":9999,"id":1})
        })
        socket.on('PlayersScore_Change',(msg)=>{
          console.log("PlayersScore_Change");
          console.log(msg);
          socket.broadcast.emit('PlayersScore_Change',msg);

        })

        socket.on('PlayersGunScore',(msg)=>{
          console.log("PlayersGunScore");
          console.log(msg);
          socket.broadcast.emit('PlayersGunScore',msg);
          // io.local.emit('Dat_PlayersScore',{"data":9999,"id":1})
        })
        socket.on('PlayersGunScore_Update',(msg)=>{
          console.log("PlayersGunScore_Update");
          console.log(msg);
          socket.broadcast.emit('PlayersGunScore_Update',msg);
          // io.local.emit('Dat_PlayersScore',{"data":9999,"id":1})
        })
        socket.on('PlayersGunScore_Change',(msg)=>{
          console.log("PlayersGunScore_Change");
          console.log(msg);
          socket.broadcast.emit('PlayersGunScore_Change',msg);

        })


    });

    return router;
}
