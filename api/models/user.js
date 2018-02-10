const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
	firstName :{
		type:String,
		lowercase: true,
		required:true
	},
  LastName :{
    type:String,
    lowercase: true,
    required:true
  },
  email:{
		type:String,
		required:true,
		unique:true
	},
	streetAddres:{
		type: String,
		required: true
	},
  city : {
	  type : String,
    required : true
  },
  country: {
    type : String,
    required : true
  },
  phone : {
	  type : Number
  }
});


module.exports = mongoose.model('User',userSchema);




