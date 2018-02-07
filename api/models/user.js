const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({
	
	name :{
		type:String,
		lowercase: true,
		required:true
	}, 
	email:{
		type:String,
		required:true,
		unique:true
	},
	userDetail:{
		type: String,
		required: true
	}
});


module.exports = mongoose.model('User',customerSchema);




