const mongoose = require('mongoose');
require('../models/user');
require('../models/apartment');

const User = mongoose.model('User'); // new model for user created

/* Get all Users */

const getAllUsers= (req, res)=>{
	User
	.find()
	.exec((err , users)=>{
		if(err){
			res.status(400).json({
        message : 'Bad Request'
      })
		} else if(!users){
      res.status(404).json({
        message : 'Users Not Found'
      })
		} else{
      res.status(200).json({
         data : users
      })
		}
	});
};

const getOneUser = (req,res)=>{
  const { userId } = req.params;
  if(!userId){
    res.status(404).json({
      message : 'UserId Needed'
    })
    return;
  }

}

module.exports = {
  getAllUsers, getOneUser };



