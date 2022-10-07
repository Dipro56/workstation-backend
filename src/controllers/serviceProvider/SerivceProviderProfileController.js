const ServiceProviderModel = require('../../models/ServiceProvider/ServiceProviderModel');
const AuthVerifyMiddleware = require('../../middleware/AuthVerifyMiddleware');

var jwt = require('jsonwebtoken');

exports.CreateServiceProvider = (req, res) => {
  let providerBody = req.body;

  // console.log('item body', itemBody);
  // res.status(200).json({ status: 'success,' });
  ServiceProviderModel.ServiceProviderSchema.create(
    providerBody,
    (err, data) => {
      if (err) {
        res.status(400).json({ status: 'fail,', data: err });
      } else {
        console.log(data);
        res.status(200).json({ status: 'success,', data: data });
      }
    }
  );
};

exports.ServiceProviderLogin = (req, res) => {
  let email = req.body['email'];
  let password = req.body['password'];
  console.log('posting login cred', email, password);
  ServiceProviderModel.ServiceProviderSchema.find(
    { email: email, password: password },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: 'fail', data: err });
      } else {
        if (data.length > 0) {
          let payload = {
            exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60,
            data: data[0],
          };
          let token = jwt.sign(payload, 'secret');
          res
            .status(200)
            .json({ status: 'success,', token: token, data: data[0] });
        } else {
          res.status(401).json({ status: 'unauthorized' });
        }
      }
    }
  );
};

exports.SelectServiceProfile = (req, res) => {
  let email = req.headers['email'];
  console.log('after getting token email', email);
  ServiceProviderModel.ServiceProviderSchema.find(
    { email: email },
    (err, data) => {
      if (err) {
        res.status(400).json({ status: 'fail', data: err });
      } else {
        res.status(401).json({ status: 'success', data: data });
      }
    }
  );
};
