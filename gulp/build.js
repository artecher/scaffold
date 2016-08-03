'use strict';

let gulp = require('gulp');

gulp.task('deploy', ['image', 'usemin', 'template', 'view', 'favicon', 'font']);

gulp.task('build', ['image', 'sass:dev', 'template', 'view', 'font']);
