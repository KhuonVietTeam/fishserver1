var app = require('express');
var router = app.Router();

module.exports = function (io) {

    io.on('connection', function (socket) {
        console.log("Nguoi ket noi : " + socket.id);
        //set player-score
        socket.on("Client_SetPlayerScore", (data) => {
            console.log(data);
            socket.broadcast.emit("Server_SetPlayerScore", data);//set score cho người chơi
        })
        //pHolding
        socket.on("pHolding", (data) => {
            console.log("pHolding ", data);
            socket.broadcast.emit("Server_pHolding", data);
        });
        //pTienchung
        socket.on("TienChung", (data) => {
            console.log("TienChung", data);
            socket.broadcast.emit("Server_TienChung", data);
        });
        //pTotalscorebet
        socket.on("TotalScorebet", (data) => {
            console.log("pTotalScorebet", data);
            socket.broadcast.emit("Server_TotalScorebet", data);
        });

        socket.on("TotalScoreWin", function (data) {
            console.log("TotalScoreWin:",data);
            socket.broadcast.emit("Server_TotalScoreWin", data);
        });
        socket.on("ReturnToPlayer", function (data) {
            console.log("ReturnToPlayer:",data);
            socket.broadcast.emit("Server_ReturnToPlayer", data);
        });
        socket.on("PercentHolding", function (data) {
            console.log("PercentHolding:", data);
            socket.broadcast.emit("Server_PercentHolding", data);
        });

        socket.on('disconnect', function () {
            console.log("DISCONNECTION");
        })
    });

    return router;
}
