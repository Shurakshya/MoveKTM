const express = require('express');
const router = express.Router();

const userCtrl = require('../../api/controllers/user');
const apartmentCtrl = require('../../api/controllers/apartment');

router.get('/',(req,res)=>{
  res.status(200).json({
    'message':'ok'
  });
});

/* user routes */
router.get('/users',userCtrl.allUsers);


/* apartment routes */
router.get('/apartments' , apartmentCtrl.getAllApartments);
router.get('/apartments/:apartmentId' , apartmentCtrl.getSingleApartment);



module.exports = router;