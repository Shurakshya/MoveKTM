const  mongoose = require('mongoose'),
Schema = mongoose.Schema; 
const User= require('./user');

const detailsSchema = new mongoose.Schema({
	detail : String,
	facility : String,
	specialFeatures: String, 
	constructionYear : Number
});

const commentSchemea = new mongoose.Schema({
  author : {
    type : String,
    required : true
  },
  commentText : String,
  commentedOn : {
    type : Date,
    "default" : Date.now()
  }
})

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
	apartmentType: { //shared,studio,family,friends
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
	description : [detailsSchema],
  comments : [commentSchemea]

});


mongoose.model('Apartment', apartmentSchema);
