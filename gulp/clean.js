'use strict';

let gulp = require('gulp');
let $ = require('./plugins.js');

gulp.task('clean:build', () => {
  return $.del($.paths.build.destGlob);
});

gulp.task('clean:css', () => {
  return $.del($.paths.css.destGlob)
});

gulp.task('clean:script', () => {
  return $.del($.paths.script.buildDestGlob);
});

gulp.task('clean:unit', () => {
  return $.del($.paths.script.testDestGlob);
});

gulp.task('clean:template', () => {
  return $.del($.paths.html.templateDestGlob);
});

gulp.task('clean:view', () => {
  return $.del($.paths.html.viewDestGlob);
});

gulp.task('clean:font', () => {
  return $.del($.paths.font.destGlob);
});

gulp.task('clean:image', () => {
  return $.del($.paths.image.destGlob);
});

gulp.task('clean:index', () => {
  return $.del($.paths.html.index);
});

gulp.task('clean:krpano', () => {
  return $.del($.paths.krpano.destGlob);
})

