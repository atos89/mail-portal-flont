'use strict';

const config = require('../config');
const gulp = require('gulp');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const plumber = require('gulp-plumber');
const notify = require('gulp-notify');

gulp.task('js', () => {
    return gulp.src([
        config.paths.src.js + '/*.js'
    ])
    .pipe(plumber({
        errorHandler: notify.onError('Error: <%= error.message %>')
    }))
    // .pipe(uglify())
    .pipe(rename({
        basename: 'script',
        extname: '.js'
    }))
    .pipe(gulp.dest(config.paths.dst.js));
});
