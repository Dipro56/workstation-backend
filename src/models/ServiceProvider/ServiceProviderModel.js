const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    phonNumber: { type: String, unique: true },
    nid: { type: String, unique: true },
    address: { type: String },
    service: { type: String },
    password: { type: String },
  },
  { versionKey: false }
);

const ServiceProviderSchema = mongoose.model('SerivceProviderList', DataSchema);

module.exports = {
  ServiceProviderSchema,
};
