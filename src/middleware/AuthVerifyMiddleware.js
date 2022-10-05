var jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  let token = req.headers['token-key'];

  jwt.verify(token, 'secret', (err, decoded) => {
    if (err) {
      res.status(401).json({ status: 'unauthorized' });
    } else {
      //get email from decoded token and add with header
      let email = decoded['data']['email'];
      console.log(email);
      req.headers.email = email;
      next();
    }
  });
};
