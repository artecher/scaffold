var express = require('express');
var User = require('../model/user');

var routes = () => {
  var userRouter = express.Router();

  userRouter.route('/')
    .get((req, res) => {
      User.find((err, user) => {
        res.json(user);
      })
    })
    .post((req, res) => {
      var user = new User(req.body);
      user.save();
      res.status(201).send(user);
    });

  // preprocess for router
  userRouter.use('/:email', (req, res, next) => {
    User.find({email: req.params.email}, (err, user) => {
      if(err) {
        res.status(500).send(err);
      }else if(user) {
        req.user = user;
        next();
      }else {
        res.status(404);
      }
    })
  });

  userRouter.route('/:email')
    .get((req, res) => {
      res.json(req.user);
    });

  return userRouter;
};

module.exports = routes;
