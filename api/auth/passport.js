const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

const User = mongoose.model('User');

passport.use(new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password'
  },
  function(email, password, done) {
    User.findOne({ email:email },  (err, user)=>{
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, { message: 'Incorrect username.' });
      }
      user.comparePassword(password, function(err, isMatch) {
        if(err){
          return done(null,false,{message:'Something went Wrong'})
        } else if(isMatch === false) {
          return done(null, false, {message: 'Incorrect Password'})
        } else {
            console.log('password match : ',isMatch);
            return done(null, user);
          }
      });
    });
  }
));