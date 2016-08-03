'use strict';

let express = require('express');
let Product = require('../model/product');

let productRoute = express.Router();

productRoute.route('/')
  .get((req, res) => {
    Product.find((err, data) => {
      console.log('here');
      res.json(data);
    })
  })
  .post((req, res) => {
    let product = new Product(req.body);
    product.save();
    res.status(201).send(product);
  });

productRoute.route('/user/:email')
  .get((req, res) => {
    console.log('email is: ' + req.params.email);
    Product.find((err, data) => {
      res.json(data);
    })
  });


module.exports = productRoute;
