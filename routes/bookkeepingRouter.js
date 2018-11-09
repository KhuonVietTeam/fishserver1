'use strict';

module.exports = function(app) {
    let bookCtrl = require('./../controllers/bookkeepingController');

  // todoList Routes
  app.route('/getCode')//Lấy license
    .post(bookCtrl.getCode);

};

