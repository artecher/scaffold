var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userModel = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  products: [],
  tableauMapping: String,
  organisation: String,
  password: String
});

module.exports = mongoose.model('User', userModel);
