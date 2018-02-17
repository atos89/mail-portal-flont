'use strict';

const gulp = require('gulp');

gulp.task('build', ['build:html', 'build:js', 'build:stylus']);

gulp.task('build:html', ['html']);

gulp.task('build:js', ['js']);

gulp.task('build:stylus', ['stylus']);
