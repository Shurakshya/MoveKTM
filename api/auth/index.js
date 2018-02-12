const passport = require('passport');
const mongoose = require('mongoose');
require('../models/user');
const User = mongoose.model('User');

const register = (req, res) => {
  const {
    email,
    firstname,
    lastname,
    password,
    phone,
    streetAddress,
    city,
    country,
  } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err) {
      res.status(400).json({
        message: 'Error',
      });
    } else if (user) {
      res.status(401).json({
        message: 'user already exists',
      });
    } else {
      const newUser = new User();
      newUser.firstname = firstname;
      newUser.lastname = lastname;
      newUser.email = email;
      newUser.streetAddress = streetAddress;
      newUser.country = country;
      newUser.city = city;
      newUser.phone= phone;
      newUser.password = password;
      // newUser.webToken = newUser.generateJwt();
      newUser.save((err, createdUser) => {
        if (err) {
          res.status(400).json({
            message: 'Something went wrong',
          });
        } else {
          res.status(200).json({
            message: 'user registered successfully!',
          });
        }
      });
    }
  });
};

/* login */
const login = (req, res) => {
  passport.authenticate('local', function(err, user, info) {
    console.log('user ',false);
    if (err) {
      res.status(401).json({
        message: 'unauthorized',
      });
    } else {
      const token = user.generateJwt();
      res.status(200).json({
        token
      });
    }
  })(req, res);
};

const checkAuth = (req, res, next) => {
  passport.authenticate('local', function(err, user, info) {
    console.log('user ',false);
    if (err) {
      res.status(401).json({
        message: 'unauthorised',
      });
    } else {
      res.locals.user = user;
      next();
    }
  })(req, res);
};

module.exports = {
  register,
  login,
  checkAuth
};