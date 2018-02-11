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
router.get('/users',userCtrl.getAllUsers);
router.get('/users/:userId', userCtrl.getOneUser);


/* apartment routes */
router.get('/apartments' , apartmentCtrl.getAllApartments);
router.post('/apartments' , apartmentCtrl.createApartment);
router.get('/apartments/:apartmentId' , apartmentCtrl.getSingleApartment);
router.put('/apartments/:apartmentId' , apartmentCtrl.updateApartment);
router.delete('/apartments/:apartmentId' , apartmentCtrl.deleteApartment);

module.exports = router;