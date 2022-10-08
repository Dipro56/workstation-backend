const UserModel = require('../../models/User/UserModel');
var jwt = require('jsonwebtoken');

exports.CreateUser = (req, res) => {
  let userBody = req.body;
  console.log(userBody);

  // console.log('item body', itemBody);
  // res.status(200).json({ status: 'success,' });
  UserModel.UserSchema.create(userBody, (err, data) => {
    if (err) {
      console.log(err);
      if (err.keyPattern.email)
        res.status(400).json({ status: 'Email already used,', data: err });
      else if (err.keyPattern.phoneNumber)
        res
          .status(400)
          .json({ status: 'Phone number already used,', data: err });
      else res.status(400).json({ status: 'fail,', data: err });
    } else {
      console.log(data);
      res.status(200).json({ status: 'success,', data: data });
    }
  });
};

exports.UserLogin = (req, res) => {
  let email = req.body['email'];
  let password = req.body['password'];
  console.log('posting user login cred', email, password);
  UserModel.UserSchema.find(
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

exports.SelectUserProfile = (req, res) => {
  let email = req.headers['email'];
  console.log('after getting token email', email);
  UserModel.UserSchema.find({ email: email }, (err, data) => {
    if (err) {
      res.status(400).json({ status: 'fail', data: err });
    } else {
      res.status(401).json({ status: 'success', data: data });
    }
  });
};
