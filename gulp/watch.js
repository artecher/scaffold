'use strict';

let gulp = require('gulp');
let $ = require('./plugins');
let globAll = require('glob-all');

gulp.task('watch:sass', () => {
  gulp.watch(globAll.sync([$.paths.css.srcGlob, `!${$.paths.css.srcFile}`]), ['sass:dev']);
});

// compile all files before watching only changed files
gulp.task('watch:js', ['script:dev'], () => {
  gulp.watch($.paths.script.srcGlob, ['script:dev:reload']);
});

gulp.task('watch:js:changed', ['script:dev'], () => {
  gulp.watch($.paths.script.srcGlob, ['preprocess:js:changed']);
});

gulp.task('watch:es', ['script:dev'], () => {
  gulp.watch($.paths.script.esSrcGlob, ['script:dev:reload']);
});

gulp.task('watch:es:changed', ['script:dev'], () => {
  gulp.watch($.paths.script.esSrcGlob, ['preprocess:es:changed']);
});

gulp.task('watch:unit:changed', ['script:unit'], () => {
  gulp.watch($.paths.script.testSrcGlob, ['script:unit:changed']);
});

gulp.task('watch:template', () => {
  gulp.watch($.paths.html.templateSrcGlob, ['template:reload']);
});

gulp.task('watch:html', () => {
  gulp.watch($.paths.html.index, $.browserSync.reload);
});

gulp.task('watch:dev', ['watch:sass', 'watch:js', 'watch:es', 'watch:html', 'watch:template']);
