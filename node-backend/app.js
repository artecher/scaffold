'use strict';

let express = require('express');
let userRouter = require('./router/userRouter');
let productRouter = require('./router/productRouter');
let widgetRouter = require('./router/widgetRouter');
let authorisationRouter = require('./router/authorisationRouter');
let port = process.env.PORT || 8080;
let mongoose = require('mongoose');
let bodyParser = require('body-parser');
let yargs = require('yargs').argv;
let cors = require('cors');

const CXT_ROOT = '';

mongoose.connect('mongodb://localhost/portal');

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', function() {
  console.log('Connected to db');
});

let app = express();

// middlewares
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

if(yargs.delay) {
  app.use((req, res, next) => {
    setTimeout(() => {
      next();
    }, yargs.delay)
  })
}

// routers 
app.use(`${CXT_ROOT}/api/v1/admin/user`, userRouter());
app.use(`${CXT_ROOT}/api/v1/admin/product`, productRouter); // no need to pass params to productRouter
app.use(`${CXT_ROOT}/api/v1/admin/user/authorisation`, authorisationRouter); // no need to pass params to productRouter
app.use(`${CXT_ROOT}/api/v1/widget`, widgetRouter); 


app.listen(port, () => {
  console.log('Gulp start the server on', port);
});
