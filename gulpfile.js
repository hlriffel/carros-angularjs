const gulp = require('gulp');
const clean = require('gulp-clean');
const webpack = require('webpack-stream');
const browserSync = require('browser-sync').create();

gulp.task('clean', function() {
  return gulp.src('./dist/**/*.js')
    .pipe(clean());
});

gulp.task('webpack', ['clean'], function() {
  return gulp.src('./src/app/app.js')
    .pipe(webpack(require('./webpack.config.js'), null, browserSync.reload))
    .pipe(gulp.dest('./dist'));
});

gulp.task('build', ['webpack']);

gulp.task('default', ['build'], function() {

});
