'use strict';

let express = require('express');
let authRouter = express.Router();

let User = require('../model/user');

authRouter.route('/')
  .post((req, res) => {
    let data = req.body;
    if(data.email && data.products) {
      User.findOneAndUpdate({email: data.email}, {products: data.products}, (err, obj) => {
        if(err) {
          res.json(
            {
              data: {
                errorMessage: err.message
              }
            });
        }else if (!obj){
          res.status(400).json(
            {
              data: {
                errorMessage: `No Email for ${data.email} found!`
              }
            }
          );
        }else {
          res.status(201).json(obj);
        }
      })
    }else {
      res.status(400).send();
    }
  });

module.exports = authRouter;
