var mongoose = require('mongoose');
require('../models/user');
require('../models/apartment');

var User = mongoose.model('User'); // new model for user created

var sendJsonResponse = function(res, status, content){
	res.status(status);
	res.json(content);
};

/* Get all Users */

module.exports.allUsers = function(req, res){
	User
	.find()
	.exec(function(err , user){
		if(err){
			sendJsonResponse(res, 400, err);
			return;
		}
		else if(!user){
			sendJsonResponse(res, 404, {
				"message" : "user not found"
			});
			return;
		}
		else{
			sendJsonResponse(res, 200, user);
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
	.findById(req.params.userid)
	.exec(function(err,user){
		if(err){
			sendJsonResponse(res, 400 , err);
			return;
		}
		else if(!user){
			sendJsonResponse(res, 404,{
				"message": "user not found with that id"
			});
			return;
		}
		else{
			sendJsonResponse(res, 200, user);
		}
	});
};


/* Get User By Name */


// module.exports.userByName = function(req, res){
// 	var userName = req.params.name;

// };


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
