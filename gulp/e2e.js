'use strict';

let gulp = require('gulp');
let gp = require('gulp-protractor');
let http = require('http');
let $ = require('./plugins.js');
let isCI = $.config.argv.type === 'ci';

// Download and update the selenium driver
gulp.task('e2etests:webdriver_manager_update', gp.webdriver_update);

//runs e2etests using protractor.conf
gulp.task('e2etests:run', ['serve'], function(cb) {
  var params = {};
  params.configFile = 'protractor.conf.js';
  params.args = [];
  if ($.config.args.baseUrl) {
    params.args.push('--baseUrl');
    params.args.push($.config.args.baseUrl);
  }
  
  gulp.src(['test/e2e/**/*.js'], { read:false })
    .pipe(gp.protractor(params)).on('error', function(e) {
      if(isCI) {
        throw e;
      } else {
        console.log(e);
      }
      cb();
    }).on('end', function() {
      $.browserSync.exit();
      cb();
    });
});
