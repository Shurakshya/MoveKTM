const mongoose = require('mongoose');
require('../models/user');
require('../models/apartment');

const User = mongoose.model('User');

/* Get all Users */
const getAllUsers = (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      res.status(400).json({
        message: 'Bad Request'
      });
    } else if (!users) {
      res.status(404).json({
        message: 'Users Not Found'
      });
    } else {
      res.status(200).json({
        data: users
      });
    }
  });
};

/* get one user */
const getOneUser = (req, res) => {
  const { userId } = req.params;
  if (!userId) {
    res.status(404).json({
      message: 'UserId Needed',
    });
    return;
  }
  User.findById(userId).exec((err, user) => {
    if (err) {
      res.sttaus(400).json({
        message: 'error',
      });
    } else if (!user) {
      res.status(404).json({
        message: 'user not found',
      });
    } else {
      res.status(200).json({
        data: user,
      });
    }
  });
};

/* create user */
const createUser = (req,res)=>{
  User.create(req.body,(err,user)=>{
    if(err){
      console.log(err.message);
      res.status(400).json({
        'message':'error'
      })
    }else{
      res.status(201).json({
        data : user
      })
    }
  })
}

/* update user */
const updateUser = (req, res) => {
  const { userId } = req.params;
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
  if (!userId) {
    res.status(404).json({
      message: 'UserId Needed',
    });
    return;
  }
  User.findById(userId).exec((err, user) => {
    if (err) {
      res.status(400).json({
        messagee: 'error',
      });
    } else if (!user) {
      res.status(404).json({
        message: 'user not found',
      });
      return;
    }
    user.firstname = firstname ||user.firstname;
    user.lastname = lastname ||user.lastname;
    user.email = email || user.email;
    user.streetAddress = streetAddress ||user.streetAddress;
    user.city = city || user.city;
    user.country = country ||user.country;
    user.password = password || user.password;
    user.phone = phone || user.phone;
    user.save((err,updatedUser)=>{
      if(err){
        res.status(400).json({
          'message':'something went wrong'
        })
      }else{
        res.status(200).json({
          data : updatedUser
        })
      }
    })
  });
};

/* delete user */
const deleteUser = (req,res) =>{
  const { userId } = req.params;
  if (!userId) {
    res.status(404).json({
      message: 'UserId Needed',
    });
    return;
  }
  User.findByIdAndRemove(userId)
    .exec((err,user)=>{
      if(err){
        res.status(400).json({
          'message':'error'
        });
      }else if(!user){
        res.status(404).json({
          'message':'user not found'
        })
      } else{
        res.status(200).json({
          'message':'deleted'
        });
      }
    })
}

module.exports = {
  getAllUsers,
  getOneUser,
  createUser,
  updateUser,
  deleteUser
};
