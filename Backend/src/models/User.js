const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
  name: String,
  key: String,
  email: String,
  password: String,
  admin: Boolean,
  createAt: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('User', UserSchema)
