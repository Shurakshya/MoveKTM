const mongoose = require('mongoose');
require('../models/user');
require('../models/apartment');

const User = mongoose.model('User'); // new model for user created

const sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

/* Get all Users */

module.exports.allUsers = (req, res)=>{
	User
	.find()
	.exec((err , user)=>{
		if(err){
			res.status(500).json({
        error : 'error message'
      })
		}
		else if(!user){
      res.status(404).json({
        error : 'not found'
      })
		}
		else{
      res.status(200).json({
         data : user
      })
		}
	});
};


/* Get One User */

module.exports.singleUser = function(req, res){
	if(!req.params && !req.params.userid){
		sendJsonResponse(res, 404,{
			"message" : "userid is required"
		});
		return;
	}
	User
	.findById(req.params.userid,(err,user)=>{
		if(err){
			sendJsonResponse(res, 400 , err);
		}
		else if(!user){
			sendJsonResponse(res, 404,{
				"message": "user not found with that id"
			});
		}
		else{
			sendJsonResponse(res, 200, user);
		}
	});
};

/*post user */
module.exports.userCreate = function(req, res) {
	User
	.create({
		name: req.body.name,
		email: req.body.email
	}, function(err, user) {
		if (err) {
			sendJSONresponse(res, 400, err);
			return;
		} else {
			sendJSONresponse(res, 201, user);
		}
	});
};
