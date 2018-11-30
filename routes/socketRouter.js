module.exports=function(io){

  var f1 = require('../sockets/f1Controller')(io);
  var f2 = require('../sockets/f2Controller')(io);
  var f3 = require('../sockets/phController')(io);
  var f4 = require('../sockets/inputKeyController')(io);

}
