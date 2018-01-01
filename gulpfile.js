var gulp = require('gulp');
var pump = require('pump');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var rename = require('gulp-rename');
var cleanCSS = require('gulp-clean-css');

// Tasks

gulp.task('styles', function (cb) {
    pump([
        gulp.src('scss/monospaced.scss'),
        sourcemaps.init(),
        sass().on('error', sass.logError),
        postcss([autoprefixer({browsers: ['last 1 version']})]),
        sourcemaps.write('.'),
        gulp.dest('dist')
    ], cb);
});

gulp.task('minify', function (cb) {
    pump([
        gulp.src('dist/monospaced.css'),
        sourcemaps.init(),
        rename({ extname: '.min.css' }),
        cleanCSS({compatibility: 'ie8'}),
        sourcemaps.write('.'),
        gulp.dest('dist')
    ], cb);
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch('dist/monospaced.css', ['minify']);
});

gulp.task('default', ['watch']);
