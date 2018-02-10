const  mongoose = require('mongoose'),
Schema = mongoose.Schema; 
const User= require('./user');

const detailsSchema = new mongoose.Schema({
	detail : String,
	facility : String,
	specialFeatures: String, 
	constructionYear : Number
});

const apartmentSchema = new mongoose.Schema({
	name : {
		type : String,
		required : true
  },
	address:{
		type:  String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
  subImages :{
	  type : Array,
  },
	price: Number,
	apartmentType: {
		type: String,
		required:true
	},
	createdOn: {
		type: Date,
		default: Date.now
	},
	owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
    },
	description : [detailsSchema]

});


mongoose.model('Apartment', apartmentSchema);
