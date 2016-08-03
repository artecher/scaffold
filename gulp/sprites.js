'use strict';

let gulp = require('gulp'),
  $ = require('./plugins');

gulp.task('sprites', ['clean:image'], () => {
  gulp.src('./img/icon/*.svg')
    .pipe($.svgSprite({
      mode: {
        symbol: {
          dest: '',
          sprite: 'icons.svg'
        }
      },
      shape: {
        id: {
          generator: 'icon-%s'
        }
      }
    }))
    .on('error', (error) => {
      console.log(error);
    })
    .pipe(gulp.dest('./img'));
});
