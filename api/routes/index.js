const express = require('express');
const router = express.Router();
const passport = require('passport');
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart();

const authCtrl = require('../auth');
const userCtrl = require('../../api/controllers/user');
const apartmentCtrl = require('../../api/controllers/apartment');
const commentCtrl = require('../../api/controllers/comment');

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
router.get('/apartments/:apartmentId' , apartmentCtrl.getSingleApartment);
router.get('/apartments/category/:apartmentType' , apartmentCtrl.getApartmentsByCategory);
router.post('/apartments' ,multipartMiddleware, apartmentCtrl.createApartment);
router.put('/apartments/:apartmentId' , apartmentCtrl.updateApartment);
router.delete('/apartments/:apartmentId' , apartmentCtrl.deleteApartment);

/*apartment sub-routes i.e. comments routes */
router.get('/apartments/:apartmentId/comments/:commentId' , commentCtrl.getOneComment);
router.post('/apartments/:apartmentId/comments' , commentCtrl.createComment);


module.exports = router;