'use strict';

let gulp = require('gulp');
let $ = require('./plugins.js');

gulp.task('unit', ['script:dev', 'script:unit'], () => {
  return new $.karma({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: true
  }).start();
});

gulp.task('tdd', ['watch:es:changed', 'watch:js:changed', 'watch:unit:changed'], () => {
  return new $.karma({
    configFile: process.cwd() + '/karma.conf.js',
    singleRun: false,
    autoWatch: true
  }).start();
});
