'use strict';

let gulp = require('gulp');
let $ = require('./plugins.js');

let compileEs = $.lazypipe()
  .pipe($.plumber)
  .pipe($.eslint, {
    env: {
      es6: true
    }
  })
  .pipe($.eslint.format)
  .pipe($.babel, {
    presets: ['babel-preset-es2015'],
    plugins: ['transform-object-assign']
  })
  .pipe($.ngAnnotate);

let compileJs = $.lazypipe()
  .pipe($.plumber)
  .pipe($.eslint)
  .pipe($.eslint.format)
  .pipe($.ngAnnotate);

gulp.task('script:dev', ['preprocess:js:dev', 'preprocess:es:dev'], () => {
});

gulp.task('script:prod', ['preprocess:js:prod', 'preprocess:es:prod'], () => {
});

gulp.task('script:dev:reload', ['preprocess:js:changed', 'preprocess:es:changed', 'sass:dev'], () => {
  return $.browserSync.reload();
});

// compile all files
gulp.task('preprocess:js:dev', ['clean:script'], () => {
  return gulp.src($.paths.script.srcGlob)
    .pipe($.preprocess({context: {DEV: true}}))
    .pipe(compileJs())
    .pipe(gulp.dest($.paths.script.buildDestPath));
});

gulp.task('preprocess:es:dev', ['clean:script'], () => {
  return gulp.src($.paths.script.esSrcGlob)
    .pipe($.preprocess({context: {DEV: true}}))
    .pipe(compileEs())
    .pipe(gulp.dest($.paths.script.buildDestPath));
});

gulp.task('preprocess:js:prod', ['clean:script'], () => {
  return gulp.src($.paths.script.srcGlob)
    .pipe($.preprocess({context: {PROD: true}}))
    .pipe(compileJs())
    .pipe(gulp.dest($.paths.script.buildDestPath));
});

gulp.task('preprocess:es:prod', ['clean:script'], () => {
  return gulp.src($.paths.script.esSrcGlob)
    .pipe($.preprocess({context: {PROD: true}}))
    .pipe(compileEs())
    .pipe(gulp.dest($.paths.script.buildDestPath));
});

gulp.task('script:unit', ['clean:unit'], () => {
  return gulp.src($.paths.script.testSrcGlob)
    .pipe(compileEs())
    .pipe(gulp.dest($.paths.script.testDestPath));
});

// only update the changed file.
gulp.task('preprocess:js:changed', () => {
  return gulp.src($.paths.script.srcGlob)
    .pipe($.changed($.paths.script.buildDestPath))
    .pipe($.preprocess({context: {DEV: true}}))
    .pipe(compileJs())
    .pipe(gulp.dest($.paths.script.buildDestPath));
});

gulp.task('preprocess:es:changed', () => {
  return gulp.src($.paths.script.esSrcGlob)
    .pipe($.changed($.paths.script.buildDestPath, {extension: '.js'}))
    .pipe($.preprocess({context: {DEV: true}}))
    .pipe(compileEs())
    .pipe(gulp.dest($.paths.script.buildDestPath));
});

gulp.task('script:unit:changed', () => {
  return gulp.src($.paths.script.testSrcGlob)
    .pipe($.changed($.paths.script.testDestPath, {extension: '.js'}))
    .pipe(compileEs())
    .pipe(gulp.dest($.paths.script.testDestPath));
});
