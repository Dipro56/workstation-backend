const mongoose = require('mongoose');

const DataSchema = mongoose.Schema(
  {
    name: { type: String },
    email: { type: String, unique: true },
    phonNumber: { type: String, unique: true },
    password: { type: String },
  },
  { versionKey: false }
);

const UserSchema = mongoose.model('UserList', DataSchema);

module.exports = {
  UserSchema,
};
