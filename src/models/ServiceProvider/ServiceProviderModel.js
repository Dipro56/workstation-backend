const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    phone: { type: String, unique: true },
    nidNumber: { type: String, unique: true },
    address: { type: String },
    serviceType: { type: String },
    addedByEmail: { type: String },
    description: { type: String },
    password: { type: String },
  },
  { versionKey: false }
);

const ServiceProviderSchema = mongoose.model('SerivceProviderList', DataSchema);

module.exports = {
  ServiceProviderSchema,
};
