var gulp 			= require('gulp'),
    notify 			= require('gulp-notify'),
    sass 			= require('gulp-sass'),
	sourcemaps      = require('gulp-sourcemaps'),
	postcss 		= require('gulp-postcss'),
	autoprefixer 	= require('autoprefixer'),
    rename          = require('gulp-rename');
    cleanCSS        = require('gulp-clean-css');

gulp.task('styles', function(){
    gulp.src('scss/monospaced.scss')
		.pipe( sourcemaps.init() )
		.pipe( sass().on('error', function(err) {
				return notify().write(err);
			})
		)
		.pipe( postcss([autoprefixer({ browsers: ['last 1 version'] })]) )
		.pipe( sourcemaps.write('.') )
		.pipe( gulp.dest('dist') )
        .pipe( notify({ message: "Styles compiled!", onLast: true }) );
});

gulp.task('minify', function(){
    gulp.src('dist/monospaced.css')
        .pipe( sourcemaps.init() )
        .pipe( rename({ extname: '.min.css' }) )
        .pipe( cleanCSS({compatibility: 'ie8'}) )
        .pipe( sourcemaps.write('.') )
        .pipe( gulp.dest('dist') )
        .pipe( notify({message: "Minify compiled!", onLast: true}) );
});

gulp.task('copytodocs', function(){
    gulp.src('dist/monospaced.min.css')
        .pipe( gulp.dest('docs') );
});

gulp.task('watch', function () {
    gulp.watch('scss/*.scss', ['styles']);
    gulp.watch('dist/monospaced.css', ['minify']);
    gulp.watch('dist/monospaced.min.css', ['copytodocs']);
});

gulp.task('default', ['watch']);
