'use strict';
var passport = require('passport');
var passportConfig = require('../controllers/passportController')(passport);
module.exports = function(app) {
  // let usersCtrl = require('../controllers/userController');

  // todoList Routes
  app.route('/login')
    .get((req,res)=>res.render('login'))
    .post(passport.authenticate('local-login', {
                                       failureRedirect: '/KO',
                                       failureFlash: true }),
                                     function(req, res){
                                       console.log('Authentication Sucessful');
                                        req.flash('success', 'You have logged in');
                                        // return res.json({status:'success'});
                                        let id=req.user.id;
                                        let per = req.user.per;
                                        return res.status(200).json({id,per,success:true})


                                     });

  app.route('/logout')
    .get((req,res)=>{  req.logout();
                      // return res.json({status:'success'});
                      return res.sendStatus(200)

                    });

  app.route('/signup')
    .post(passport.authenticate('local-signup', {
                                       // successRedirect: '/OK',
                                       failureRedirect: '/KO',
                                       failureFlash: true }),
                                     function(req, res){
                                       console.log(req.body);
                                       console.log('Authentication Sucessful');
                                        req.flash('success', 'You have sign in');
                                        // return res.json({status:'success'});
                                        return res.sendStatus(200)

                                        // res.redirect('/OK');
                                        // console.log(res.user);
                                     });




};
