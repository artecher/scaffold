'use strict';

let gulp = require('gulp');

gulp.task('build:prod', ['usemin', 'favicon']);

gulp.task('build:dev', ['image', 'sass:dev', 'script:dev']);
