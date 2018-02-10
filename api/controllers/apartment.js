const mongoose = require('mongoose');
const Apartment = mongoose.model('Apartment');
const User = mongoose.model('User'); // new model for user created

const getAllApartments = (req, res) => {
    Apartment.
    find().
    exec((err,apartments)=>{
        if(err){
          res.status(400).json({
            message : "Bad Request"
          })
        } else if(!apartments){
          res.status(404).json({
            message : "Not Found"
          })
        } else {
          res.status(200).json({
            data: apartments
          });
        }
    });
};

const getSingleApartment = (req, res)=>{
  const {apartmentId} = req.params;
  if(!apartmentId){
    res.status(404).json({
      message : "Id not found"
    })
    return;
  }
  Apartment
    .findById(apartmentId)
    .exec((err, apartment)=>{
      if(err){
        res.status(400).json({
          message : "Bad Request"
        })
      } else if(!apartment){
        res.status(404).json({
          message : "Not Found"
        })
      } else{
        res.status(200).json({
          data : apartment
        });
      }
  });
}

const createApartment=(req,res)=> {
  const {name, address, image, subImages, price,
    apartmentType, detail, facility, specialFeatures,constructionYear} = req.body;
  Apartment
    .create({
      name, address, image, subImages, price, apartmentType,
      description: [{
        detail, facility, specialFeatures, constructionYear
      }]
    }, (err, apartment) => {
      if (err) {
        console.log("error" , err);
        res.status(400).json({
          message: "Bad Request"
        })
      } else {
        res.status(201).json({
          message: "Apartment Created",
          data: apartment
        })
      }
    })
}

const updateApartment = (req, res)=>{
  const {apartmentId} = req.params;
  const { name, address, image, subImages, price,
    apartmentType, detail, facility, specialFeatures,constructionYear } = req.body;
  if(!apartmentId){
    res.status(404).json({
      message : "Id is required"
    })
    return;
  }
  Apartment
    .findById(apartmentId)
    .exec((err, apartment)=>{
      if(err){
        res.status(400).json({
          message : "Bad Request"
        })
      } else if(!apartment){
        res.status(404).json({
          message : "apartment not found"
        })
      } else {
        const description = apartment.description[0];
        apartment.name = name || apartment.name;
        apartment.address = address || apartment.address;
        apartment.price = price || apartment.price;
        apartment.image = image || apartment.image;
        apartment.subImages = subImages || apartment.subImages;
        apartment.apartmentType = apartmentType || apartment.apartmentType;
        apartment.description =  [{
          detail : detail || description.detail ,
          facility : facility || description.facility ,
          specialFeatures : specialFeatures || description.specialFeatures ,
          constructionYear : constructionYear || description.constructionYear
        }];
        apartment.save((err, updatedApartment)=>{
          if(err){
            res.status(400).json({
              message : "Something went wrong"
            })
          } else{
            res.status(200).json({
              data : updatedApartment
            })
          }
        })
      }
  });
}

const deleteApartment = (req,res)=>{
  const {apartmentId} = req.params;
  if(!apartmentId){
    res.status(404).json({
      message : "Id not found"
    })
    return;
  }
  Apartment
    .findByIdAndRemove(apartmentId)
    .exec((err, apartment)=>{
      if(err){
        res.status(400).json({
          message : "Something went wrong"
        })
      }else{
        res.status(204).json({
          message : "Successfully Deleted"
        })
      }
    })
}


module.exports={
  getAllApartments, getSingleApartment, createApartment , updateApartment, deleteApartment
}