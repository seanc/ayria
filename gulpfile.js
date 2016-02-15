'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      auto = require('gulp-autoprefixer'),
      srcPath = './assets/styles/src/**/*.scss';
      
gulp.task('default', () => {
  return gulp.src(srcPath)
    .pipe(sass().on('error', sass.logError))
    .pipe(auto({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(gulp.dest('./assets/styles/dist'));
});

gulp.task('watch', () => {
  gulp.watch(srcPath, ['default']);
});