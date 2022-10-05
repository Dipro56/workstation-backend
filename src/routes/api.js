const express = require('express');
const router = express.Router();

const ServiceProviderProfileController = require('../controllers/serviceProvider/SerivceProviderProfileController');

router.get('/', (req, res) => {
  res.send('Hello work station');
});

//Service provider routes
router.post(
  '/addServiceProvider',
  ServiceProviderProfileController.CreateServiceProvider
);

module.exports = router;
