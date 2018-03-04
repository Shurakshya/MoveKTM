const mongoose = require('mongoose');
const Apartment = mongoose.model('Apartment');
const User = mongoose.model('User'); // new model for user created
const AWS = require('aws-sdk');
const { ACCESS_KEY, SECRET_KEY, REGION, BUCKET } = require('../../env');
const fs = require('fs');

AWS.config.update({
  accessKeyId: ACCESS_KEY,
  secretAccessKey: SECRET_KEY,
  region: REGION,
});

const s3 = new AWS.S3({ apiVersion: '2006-03-01' });

const getAllApartments = (req, res) => {
  Apartment.find().exec((err, apartments) => {
    if (err) {
      res.status(400).json({
        message: 'Bad Request',
      });
    } else if (apartments && apartments.length <=0) {
      res.status(404).json({
        message: 'Not Found',
      });
    } else {
      res.status(200).json({
        data: apartments,
      });
    }
  });
};

const getSingleApartment = (req, res) => {
  const { apartmentId } = req.params;
  if (!apartmentId) {
    res.status(404).json({
      message: 'Id not found',
    });
    return;
  }
  Apartment.findById(apartmentId).exec((err, apartment) => {
    if (err) {
      res.status(400).json({
        message: 'Bad Request',
      });
    } else if (!apartment) {
      res.status(404).json({
        message: 'Not Found',
      });
    } else {
      res.status(200).json({
        data: apartment,
      });
    }
  });
};

const getApartmentsByCategory =(req, res) =>{
  const apartmentType = req.params.apartmentType.toLowerCase();
  if (!apartmentType) {
    res.status(404).json({
      message: 'Apartment type is required',
    });
    return;
  }
  Apartment
    .find({apartmentType : new RegExp(apartmentType , 'i' )})
    .exec((err, apartment)=>{
      if (err) {
        res.status(400).json({
          message: 'Bad Request',
        });
      } else if (apartment.length<=0) {
        res.status(404).json({
          message: `No apartments of this ${apartmentType}.`,
        });
      } else {
        res.status(200).json({
          data: apartment,
        });
      }
    })
};

const createApartment = (req, res) => {
  const {
    name,
    address,
    subImages,
    price,
    apartmentType,
    detail,
    facility,
    specialFeatures,
    constructionYear,
  } = req.body;
  // s3 image data
  const data = {
    Key: req.files.image.name.replace(/[^\w!?]/g, ''),
    Body: fs.createReadStream(req.files.image.path),
    Bucket: BUCKET,
    ContentType: 'image/jpeg',
    ACL: 'public-read',
  };
  s3.upload(data, function(err, img) {
    if (err) {
      res.status(500).json({
        message: 'error on uploading image',
      });
    } else {
      /* create apartment */
      Apartment.create(
        {
          name,
          address,
          image : img.Location,
          subImages,
          price,
          apartmentType,
          description: [
            {
              detail,
              facility,
              specialFeatures,
              constructionYear,
            },
          ],
        },
        (err, apartment) => {
          if (err) {
            console.log('error', err);
            res.status(400).json({
              message: 'Bad Request',
            });
          } else {
            res.status(201).json({
              message: 'Apartment Created',
              data: apartment,
            });
          }
        },
      );
    }
  });
};

const updateApartment = (req, res) => {
  const { apartmentId } = req.params;
  const {
    name,
    address,
    image,
    subImages,
    price,
    apartmentType,
    detail,
    facility,
    specialFeatures,
    constructionYear,
  } = req.body;
  if (!apartmentId) {
    res.status(404).json({
      message: 'Id is required',
    });
    return;
  }
  Apartment.findById(apartmentId).exec((err, apartment) => {
    if (err) {
      res.status(400).json({
        message: 'Bad Request',
      });
    } else if (!apartment) {
      res.status(404).json({
        message: 'apartment not found',
      });
    } else {
      const description = apartment.description[0];
      apartment.name = name || apartment.name;
      apartment.address = address || apartment.address;
      apartment.price = price || apartment.price;
      apartment.image = image || apartment.image;
      apartment.subImages = subImages || apartment.subImages;
      apartment.apartmentType = apartmentType || apartment.apartmentType;
      apartment.description = [
        {
          detail: detail || description.detail,
          facility: facility || description.facility,
          specialFeatures: specialFeatures || description.specialFeatures,
          constructionYear: constructionYear || description.constructionYear,
        },
      ];
      apartment.save((err, updatedApartment) => {
        if (err) {
          res.status(400).json({
            message: 'Something went wrong',
          });
        } else {
          res.status(200).json({
            data: updatedApartment,
          });
        }
      });
    }
  });
};

const deleteApartment = (req, res) => {
  const { apartmentId } = req.params;
  if (!apartmentId) {
    res.status(404).json({
      message: 'Id not found',
    });
    return;
  }
  Apartment.findByIdAndRemove(apartmentId).exec((err, apartment) => {
    if (err) {
      res.status(400).json({
        message: 'Something went wrong',
      });
    } else {
      res.status(204).json({
        message: 'Successfully Deleted',
      });
    }
  });
};

module.exports = {
  getAllApartments,
  getSingleApartment,
  getApartmentsByCategory,
  createApartment,
  updateApartment,
  deleteApartment,
};
