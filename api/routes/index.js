const express = require('express');
const router = express.Router();
const passport = require('passport');

const authCtrl = require('../auth');
const userCtrl = require('../../api/controllers/user');
const apartmentCtrl = require('../../api/controllers/apartment');

router.get('/',(req,res)=>{
  res.status(200).json({
    'message':'ok'
  });
});

/* authentication */
router.post('/login',authCtrl.login); // applied middleware
router.post('/register', authCtrl.register)
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