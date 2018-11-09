'use strict';

module.exports = function(app) {
    let bookCtrl = require('./../controllers/bookkeepingController');

  // todoList Routes
  app.route('/getCode')
    .post(bookCtrl.getCode);

};

