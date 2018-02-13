const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const env = require('../../env');
const SALT_WORK_FACTOR = 10;
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
  firstname: {
    type: String,
    lowercase: true,
    required: true,
  },
  lastname: {
    type: String,
    lowercase: true,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: { type: String, required: true },
  streetAddress: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  phone: Number,
  webToken : String
});

/* convert password to hash and salt using mongoose middleware */
userSchema.pre('save', function(next) {
  let user = this;
  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) return next();
  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
    if (err) return next(err);
    // hash the password using our new salt
    bcrypt.hash(user.password, salt, function(err, hash) {
      if (err) return next(err);
      // override the cleartext password with the hashed one
      user.password = hash;
      next();
    });
  });
});

/* validate password */
userSchema.methods.comparePassword = function(candidatePassword, cb) {
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
    if (err){
      return cb(err);
    }
    cb(null, isMatch);
  });
};

/* generate Json Web Token */
userSchema.methods.generateJwt = function(){
  let expiry = new Date();
  expiry.setDate(expiry.getDate() + 7); // create expiry date obj and set expiry for 7 days
  return jwt.sign({
    email: this.email,
    firstname: this.firstname,
    lastname: this.lastname,
    phone : this.phone,
    exp: parseInt(expiry.getTime() / 1000)
  }, env.JWT_SECRET);
};

module.exports = mongoose.model('User', userSchema);
