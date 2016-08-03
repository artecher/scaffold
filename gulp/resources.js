'use strict';

let gulp = require('gulp');
let $ = require('./plugins');

gulp.task('favicon', () => {
  return gulp.src($.paths.favicon.srcFile)
      .pipe(gulp.dest($.paths.favicon.destPath));
});

gulp.task('image', ['clean:image', 'sprites'], () => {
  return gulp.src($.paths.image.srcGlob)
    .pipe(gulp.dest($.paths.image.destPath));
});

gulp.task('font:bootstrap', ['clean:font'], () => {
  return gulp.src($.paths.font.bootstrapSrcGlob)
    .pipe(gulp.dest($.paths.font.bootstrapDestPath));
});

gulp.task('template', ['clean:template'], () => {
  return gulp.src($.paths.html.templateSrcGlob)
    .pipe(gulp.dest($.paths.html.templateDestPath));
});

gulp.task('view', ['clean:view'], () => {
  return gulp.src($.paths.html.viewGlob)
    .pipe(gulp.dest($.paths.html.viewDestPath));
});

gulp.task('view:reload', ['view'], () => {
  $.browserSync.reload();
});

gulp.task('template:reload', ['template', 'sass:dev'], () => {
  $.browserSync.reload();
});

gulp.task('font:fontawesome', ['clean:font'], () => {
  return gulp.src($.paths.font.fontawesomeSrcGlob)
    .pipe(gulp.dest($.paths.font.fontawesomeDestPath));
});

gulp.task('font', ['font:bootstrap', 'font:fontawesome', 'clean:font']);

gulp.task('krpano', ['clean:krpano'], () => {
  return gulp.src($.paths.krpano.srcGlob)
    .pipe(gulp.dest($.paths.krpano.destPath));
});
