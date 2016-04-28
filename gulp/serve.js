'use strict';

let gulp = require('gulp');
let $ = require('./plugins.js');
let fs = require('fs');
let proxy = require('proxy-middleware');
let url = require('url');

gulp.task('serve', ['watch:dev', 'build:dev'], () => {

  const API_PREFIX_REG = /api\//;
  const API_PREFIX = '/api';
  const CXT_ROOT = '/portal';
  const APIARY_MOCKSERVER_URL = `http://private-8e70e-qrious.apiary-mock.com${API_PREFIX}`;
  const LOCAL_BACKEND_URL = `http://localhost:8080${CXT_ROOT}${API_PREFIX}`;

  let cookie = null;

  let middleware = (req, res, next) => {
    let url = req.url;
    if(API_PREFIX_REG.test(url)){
      if($.config.args.isLocal){
        let filePath = `${url.substring(url.indexOf(API_PREFIX) + 1)}.json`;
        fs.stat(filePath, (err) => {
          if(err){
            next();
          }else{
            //read the json file
            let result = fs.readFileSync(filePath);
            res.writeHeader(200, {'Content-Type': 'application/json'});
            res.end(result, 'utf-8');
          }
        });
      }
    }else{
      next();
    }
  };

  let config = {
    server: {
      baseDir: './',
      index: 'index.html'
    },
    open: false,
    port: 8000
  };

  let startServer = () => {
    if($.config.args.isLocal){
      config.middleware = middleware;
      $.browserSync.init(config);
    }else if($.config.args.isApiary){
      let proxyOptions = url.parse(APIARY_MOCKSERVER_URL);
      proxyOptions.route = API_PREFIX;
      config.middleware = [proxy(proxyOptions)];
      $.browserSync.init(config);
    }else{
      // need to save the session as frontend is running in the container for now
      let requestOptions = {
        url: `http://localhost:${$.config.port}/portal/index#/`
      };
      $.request(requestOptions, (error, response) => {
        if(response.toJSON().headers['set-cookie']){
          cookie = response.toJSON().headers['set-cookie'].toString();
          cookie = cookie.substring(0, cookie.indexOf(';'));
        }else{
          cookie = 'foo';
        }
        if(cookie){
          let proxyOptions = url.parse(LOCAL_BACKEND_URL);
          proxyOptions.route = API_PREFIX;
          // TODO: need to insert a mock User-Id: RTO_user
          proxyOptions.headers = {
            Cookie: cookie
          };
          config.middleware = [proxy(proxyOptions)];
          $.browserSync.init(config);
        }else{
          console.error(`Cannot get cookie. Error: ${error}`);
        }
      });
    }
  };

  startServer();
});
