//basic import
const express = require('express');
const router = require('./src/routes/api');
require('dotenv').config();

const app = new express();
const bodyParser = require('body-parser');

//security middleware

const cors = require('cors');

//database import
const mongoose = require('mongoose');

app.use(cors());

//body parser
app.use(bodyParser.json());

//local connection
const URI = 'mongodb://127.0.0.1:27017/Workstation';
const OPTION = {
  user: '',
  pass: '',
  autoIndex: true,
};

// const URI = 'mongodb://127.0.0.1:27017/JerseyVandar';
// const URI = `mongodb+srv://<username>:<password>@cluster0.j5jiv8g.mongodb.net/JerseyVandar
// `;
// const OPTION = {
//   user: 'Sadat_Shahriar_Bari',
//   pass: 'jerseyvandar',
// };

mongoose.connect(URI, OPTION, (err) => {
  if (err) console.log(err);
  else console.log('Database successfully connected');
});

//router implement
app.use(router);

//undefiend route
app.use('*', (req, res) => {
  res.status(404).json({ status: 'fail', data: 'Not Found' });
});

module.exports = app;
