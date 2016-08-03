'use strict';

let gulp = require('gulp');
let $ = require('./plugins');

let config = {
  style: 'expanded',
  precision: 10
};

gulp.task('sass:dev', ['sass:preprocess:dev', 'clean:css'], () => {
  return $.rubySass([$.paths.css.srcFile, 'sass/custom.scss'])
    .pipe($.plumber())
    .pipe($.autoprefixer(
        {
          browsers: ['last 5 versions', 'Firefox ESR', 'Opera 12.1', 'IE >= 10', 'Android 2.3']
        }
      )
    )
    .pipe(gulp.dest($.paths.css.destPath))
    .pipe($.browserSync.stream())
});

gulp.task('sass:prod', ['sass:preprocess:prod', 'clean:css'], () => {
  return $.rubySass([$.paths.css.srcFile, 'sass/custom.scss'])
    .pipe($.autoprefixer(
      {
        browsers: ['last 5 versions', 'Firefox ESR', 'Opera 12.1', 'IE >= 10', 'Android 2.3']
      }
    )
  )
    .pipe(gulp.dest($.paths.css.destPath))
    .pipe($.browserSync.stream())
});

gulp.task('sass:preprocess:dev', () => {
  return gulp.src($.paths.css.rawFile)
    .pipe($.plumber())
    .pipe($.preprocess({context: {DEV: true}}))
    .pipe($.rename($.paths.css.srcFileName))
    .pipe(gulp.dest($.paths.css.srcFilePath))
});

gulp.task('sass:preprocess:prod', () => {
  return gulp.src($.paths.css.rawFile)
    .pipe($.preprocess({context: {PROD: true}}))
    .pipe($.rename($.paths.css.srcFileName))
    .pipe(gulp.dest($.paths.css.srcFilePath))
});
