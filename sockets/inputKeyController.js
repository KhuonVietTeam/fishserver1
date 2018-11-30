var app = require('express');
var router = app.Router();

module.exports = function(io) {
    io.on('connection', function(socket) {

      socket.on('InputKey',(msg)=>{
        console.log(msg);
        socket.broadcast.emit('InputKey',msg);
      })

    });

    return router;
}
