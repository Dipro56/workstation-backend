const express = require('express');
const router = express.Router();

const ServiceProviderProfileController = require('../controllers/serviceProvider/SerivceProviderProfileController');
const UserProfileController = require('../controllers/user/UserProfileController');
const AuthVerifyMiddleWare = require('../middleware/AuthVerifyMiddleWare');

router.get('/', (req, res) => {
  res.send('Hello work station');
});

//Service provider routes
router.post(
  '/addServiceProvider',
  ServiceProviderProfileController.CreateServiceProvider
);
router.post(
  '/serviceProviderLogin',
  ServiceProviderProfileController.ServiceProviderLogin
);
router.get(
  '/selectServiceProfile',
  AuthVerifyMiddleWare,
  ServiceProviderProfileController.SelectServiceProfile
);

//User routes
router.post('/createUser', UserProfileController.CreateUser);
router.post('/userLogin', UserProfileController.UserLogin);
router.get(
  '/selectUserProfile',
  AuthVerifyMiddleWare,
  UserProfileController.SelectUserProfile
);

module.exports = router;
