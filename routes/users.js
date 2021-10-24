const express = require('express')
// const multer = require('multer')
const usersController = require('../controllers/userController')
const authController = require('../controllers/authController')

// const upload = multer({ dest: 'public/img/users'})

const router = express.Router()


//===> signup router 
router.post('/signup', authController.signup);
//===> signin router 
router.post('/login', authController.login);

//====Forgot Password
router.post('/forgotPassword', authController.forgotPassword);
router.patch('/resetPassword/:token', authController.resetPassword);


//==== all the routes that comes after this will be protected
router.use(authController.protect);

router.get('/me', usersController.getMe, usersController.getUser)

router.patch('/updateMyPassword', authController.updatePassword);

router.patch('/updateMe', 
      usersController.uploadUserPhoto, 
      usersController.resizeUserPhoto, 
      usersController.updateMe);

//==== Deleteme
router.delete('/deleteMe', usersController.deleteMe);


//==== All the following routes is only allow to an Admin
router.use(authController.restrictTo('admin'));

 router
    .route('/')
    .get(usersController.getAllUsers);
 router
    .route('/:id')
    .get(usersController.getUser)
    .patch(usersController.updateUser)
    .delete(usersController.deleteUser);  


    module.exports = router;