'use strict';

let gulp = require('gulp');
let $ = require('./plugins.js');


//todo: depend on sass
gulp.task('usemin', ['sass:prod'], () => {
  return gulp.src('index.html')
    .pipe($.usemin({
      js: [$.uglify(), $.rev()],
      vendor: [$.uglify(), $.rev()], //gulp-usemin needs a uniqueId `https://github.com/zont/gulp-usemin/issues/91`
      css: [$.minifyCss(), $.rev()]
    }))
    .pipe(gulp.dest($.paths.build.destPath));
});
