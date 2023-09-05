const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model('UserModel', UserSchema);
