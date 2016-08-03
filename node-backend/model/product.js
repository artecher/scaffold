'use strict';

let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let productModel = new Schema({
  productId: String,
  productName: String,
  productDescription: String,
  imageUrl: String
});

module.exports = mongoose.model('Product', productModel);
