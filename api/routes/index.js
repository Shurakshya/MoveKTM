const express = require('express');
const router = express.Router();
const authCtrl = require('../auth');
const passport = require('passport');

const userCtrl = require('../../api/controllers/user');
const apartmentCtrl = require('../../api/controllers/apartment');

router.get('/',(req,res)=>{
  res.status(200).json({
    'message':'ok'
  });
});

/* authentication */
router.get('/login',authCtrl.login); // applied middleware
/* user routes */
router.get('/users', userCtrl.getAllUsers);
router.get('/users/:userId', userCtrl.getOneUser);
router.post('/users', userCtrl.createUser);
router.put('/users/:userId', userCtrl.updateUser);
router.delete('/users/:userId', userCtrl.deleteUser);


/* apartment routes */
router.get('/apartments' , apartmentCtrl.getAllApartments);
router.post('/apartments' , apartmentCtrl.createApartment);
router.get('/apartments/:apartmentId' , apartmentCtrl.getSingleApartment);
router.put('/apartments/:apartmentId' , apartmentCtrl.updateApartment);
router.delete('/apartments/:apartmentId' , apartmentCtrl.deleteApartment);

module.exports = router;