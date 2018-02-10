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
        }
        else if(!apartments){
          res.status(404).json({
            message : "Not Found"
          })
        }
        res.status(200).json( {
          data : apartments
        });
    });
};

const getSingleApartment = (req, res)=>{
  const id = req.params.apartmentId;
  if(!id){
    res.status(404).json({
      message : "Id not found"
    })
  }
  Apartment.
    findById(id)
    .exec((err, apartment)=>{
      if(err){
        res.status(400).json({
          message : "Bad Request"
        })
      }
      else if(!apartment){
        res.status(404).json({
          message : "Not Found"
        })
      }else{
        res.status(200).json({
          data : apartment
        });
      }
  });
}

module.exports={
  getAllApartments, getSingleApartment
}