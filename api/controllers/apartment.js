var mongoose = require('mongoose');
var Apart = mongoose.model('Apartment');
var User = mongoose.model('User'); // new model for user created

var sendJsonResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.allApartments = function(req, res) {
    Apart.
    find().
    exec(function(err,apartment){
        if(err){
            sendJsonResponse(res,400,err);
            return;
        }
        else if(!apartment){
            sendJsonResponse(res,404,{
                "message":"Apartment not found"
            });
            return;
        }else{
            sendJsonResponse(res,200,apartment);
        }
    });

};


// Get by  ID
module.exports.apartmentReadOne = function(req, res) {
  if(!req.params && !req.params.apartmentid){
    sendJsonResponse(res,404,{
        "message":"Apartment id is required"
    });
    return;
  }
    Apart.findById(req.params.apartmentid)
        .populate('user')
        .exec(function(err, apartment) {
            if(err){
                sendJsonResponse(res,400,err);
                return;
            }else if(!apartment){
                sendJsonResponse(res,404,{
                    "message" : "Apartment not found with that Id"
                });
                return;
            }else{
                sendJsonResponse(res,200,apartment);
            }
    });
            
};

/* Post method for creating apartment */ 
module.exports.apartmentCreate = function(req, res){
    Apart.create({
        name : req.body.name,
        address :req.body.address,
        image: req.body.image,
        price: req.body.price,
        hasLivedOn : req.body.hasLivedOn,
        apartmentType : req.body.apartmentType,
        description : [{
            detail : req.body.detail,
            facility : req.body.facility,
            specialFeatures : req.body.specialFeatures,
            constructionYear : req.body.constructionYear
        }]
    }, function(err, apartment){
        if(err){
            sendJsonResponse(res,400,err);
            return;
        }else{
            sendJsonResponse(res,201,apartment);
        }


    });
};


/* PUT /api/apartment/:id */
module.exports.apartmentUpdateOne = function(req, res) {
  if(!req.params && !req.params.apartmentid){
    sendJsonResponse(res,404,{
        "message":"Apartment id is required"
    });
    return;
  }
    Apart.findByIdAndUpdate(req.params.apartmentid, {
        name: req.body.name,
        address: req.body.address,
        price: req.body.price,
        apartmentType: req.body.apartmentType,
        description: [{
            detail: req.body.detail,
            facility: req.body.facility,
            specialFeatures: req.body.specialFeatures,
            constructionYear: req.body.constructionYear
        }]
    }, function(err, apartment) {
        if (err) {
            sendJsonResponse(res, 400, err);
            return;
        }else if(!result){
            sendJsonResponse(res,404,{
                "message":"Apartment not found to update"
            });
            return;
        }else{
            sendJsonResponse(res,200,apartment);
        }
    });
};


/*DELETE /api/apartment/:id*/
module.exports.apartmentDeleteOne = function(req, res) {

  if(!req.params && !req.params.apartmentid){
    sendJsonResponse(res,404,{
        "message":"Apartment id is required"
    });
    return;
  }
    Apart
        .findByIdAndRemove(req.params.apartmentid)
        .exec(function(err, apartment) {
            if(err){
                sendJsonResponse(res,400,err);
                return;
            }else if(!apartment){
                sendJsonResponse(res,404,{
                    "message" : "Apartment not found"
                });
                return;
            }else{
                sendJsonResponse(res,204,null);
            }    
        });
};
