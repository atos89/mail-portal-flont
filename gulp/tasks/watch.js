'use strict'

const gulp = require('gulp');
const config = require('../config');
const browserSync = require('browser-sync');

gulp.task('watch', () => {
    gulp.start(
        'watch:html',
        'watch:js',
        'watch:stylus'
    );
});

gulp.task('watch:html', () => {
    gulp.watch(config.paths.src.html + '/**/*', ['build:html']);
});

gulp.task('watch:js', () => {
    gulp.watch(config.paths.src.js + '/**/*', ['build:js']);
});

gulp.task('watch:stylus', () => {
    gulp.watch(config.paths.src.stylus + '/**/*', ['build:stylus']);
});
