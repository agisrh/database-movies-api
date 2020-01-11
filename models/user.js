const mongoose = require('mongoose')
const Schema = mongoose.Schema
const users = new Schema({
    email: {
      type: String,
      index: true,
      unique: true
    }, username: {
      type:String,
    }, token: {
      type:String, 
      unique: true
    }
},{collection: 'users'})
module.exports = mongoose.model('users', users)