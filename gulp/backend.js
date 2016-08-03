'use strict';

var gulp = require('gulp');
let $ = require('./plugins.js');

gulp.task('backend', () => {
  $.nodemon({
    script: 'node-backend/app.js',
    ext: 'js',
    args: [`--delay=${$.config.args.delay}`],
    env: {
      PORT: 8081
    },
    watch: ['node-backend/']
  }).on('restart', () => {
    console.log('Restarting...');
  })
})
