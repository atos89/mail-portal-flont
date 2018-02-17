'use strict';

const config = require('../config');
const gulp = require('gulp');

gulp.task('html', () => {
    return gulp.src([
        config.paths.src.html + '/**/*'
    ])
    .pipe(gulp.dest(config.paths.dst.html));
});
