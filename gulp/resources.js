'use strict';

let gulp = require('gulp');
let $ = require('./plugins');

gulp.task('favicon', () => {
  return gulp.src($.paths.favicon.srcFile)
      .pipe(gulp.dest($.paths.favicon.destPath));
});

gulp.task('image', ['clean:image'], () => {
  return gulp.src($.paths.image.srcGlob)
    .pipe(gulp.dest($.paths.image.destPath));
});

gulp.task('font:bootstrap', ['clean:font'], () => {
  return gulp.src($.paths.font.bootstrapSrcGlob)
    .pipe(gulp.dest($.paths.font.bootstrapDestPath));
});

gulp.task('font:fontawesome', ['clean:font'], () => {
  return gulp.src($.paths.font.fontawesomeSrcGlob)
    .pipe(gulp.dest($.paths.font.fontawesomeDestPath));
});
