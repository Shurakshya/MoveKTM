var mongoose = require('mongoose'),
Schema = mongoose.Schema; 
const User= require('./user');

const detailsSchema = new mongoose.Schema({
	detail : String,
	facility : String,
	specialFeatures: String, 
	constructionYear : Number

});


const apartmentSchema = new mongoose.Schema({

	name : String,
	address:{
		type:  String,
		required: true
	},
	image: {
		type: String,
		required: true
	},
	price: Number, 
	apartmentType: {
		type: String,
		required:true
	},
	hasLivedOn : Boolean,
	createdOn: {
		type: Date,
		default: Date.now
	},
	postedBy: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
	description : [detailsSchema]

});


mongoose.model('Apartment', apartmentSchema);
