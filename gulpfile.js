'use strict';

var gulp  = require('gulp');
var fs    = require('fs');
var path  = require('path');

var karma = require('karma').server;

let tasks = fs.readdirSync('./gulp/').filter((name) => {
  return (/(\.js$)/i).test(path.extname(name))
});

tasks.forEach((task) => {
  require('./gulp/' + task);
});

gulp.task('default', ['serve']);

gulp.task('test', function () {
  karma.start({
    configFile: __dirname + '/karma.conf.ci.js'
  });
});