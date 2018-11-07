// config/passport.js

// load all the things we need
var LocalStrategy   = require('passport-local').Strategy;

var mysql = require('mysql');
var connection = require('../config/db') //connect to db

// expose this function to our app using module.exports
module.exports = function(passport) {

	// =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    // hàm được gọi khi xác thực thành công để lưu thông tin user vào session

    passport.serializeUser(function(user, done) {
		      done(null, user.id);
    });

    // used to deserialize the user
    // hàm được gọi bởi passport.session .
    // Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.user

    passport.deserializeUser(function(id, done) {
      let sql = 'select * from users where id = ?'
	    connection.query(sql,[id],function(err,rows){
      if(err){
        console.log(err);
      }
        console.log("A3");
        return done(null,rows[0]);

		});
    });


 	// =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
	// by default, if there was no name, it would just be called 'local'

  passport.use('local-signup', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with id
        usernameField : 'id',
        passwordField : 'password',
        // nameField: 'name',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, id, password, done) {
        
    		// find a user whose id is the same as the forms id
        // we are checking to see if the user trying to login already exists
        let sql = 'select * from users where id = ?'
        connection.query(sql,[id],function(err,rows){
        console.log("Rows: ");
        console.log(rows);
  			console.log("above row object");
  			if (err){
          return done(err);
        }

  			if (rows.length) {
          return done(null, false, req.flash('signupMessage', 'That id is already taken.'));
        }
        else {
    			// if there is no user with that id
          // create the user
          var newUserMysql = new Object();


    			newUserMysql.id    = id;
          newUserMysql.password = password; // use the generateHash function in our user model
          // newUserMysql.name = req.body.name; // use the generateHash function in our user model
          var insertQuery = 'INSERT INTO users ( id, password,name ) values (?,?,?)';
    			//var insertQuery = "INSERT INTO users ( id, password,name ) values ('" + id +"','"+ password +"','"+ req.body.name +"')";
          console.log(insertQuery);
    			connection.query(insertQuery,[id,password,req.body.name],function(err,rows){
      		newUserMysql.ordernumber = rows.insertId;
          console.log("newUserMySql: ");
          console.log(newUserMysql);
      		return done(null, newUserMysql);
  				});
        }
    		});
    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    // we are using named strategies since we have one for login and one for signup
    // by default, if there was no name, it would just be called 'local'

    passport.use('local-login', new LocalStrategy({
        // by default, local strategy uses username and password, we will override with id
        usernameField : 'id',
        passwordField : 'password',
        passReqToCallback : true // allows us to pass back the entire request to the callback
    },
    function(req, id, password, done) { // callback with id and password from our form
        let sql = 'SELECT * FROM users WHERE id = ?';
        connection.query(sql,[id],function(err,rows){

      			if (err){
              return done(err);
            }

      			if (!rows.length) {
              return done(null, false, req.flash('loginMessage', 'No user found.')); // req.flash is the way to set flashdata using connect-flash
            }

      			// if the user is found but the password is wrong
            if (!( rows[0].password == password)){

              return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); // create the loginMessage and save it to session as flashdata

            }

            // all is well, return successful user
            return done(null, rows[0]);
		    });
    }));
};
