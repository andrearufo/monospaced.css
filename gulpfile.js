var paths = {
	styles: {
		src: 'scss',
		dest: 'dist'
	},
	docs: 'docs'
};

let gulp = require('gulp');
let sourcemaps = require('gulp-sourcemaps');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let postcss = require('gulp-postcss');
let autoprefixer = require('autoprefixer');
let cssnano = require('cssnano');
let browserSync = require('browser-sync').create();

function styles(done) {
	return (
		gulp
		.src(paths.styles.src+'/*.scss')
		.pipe(sourcemaps.init())

		.pipe(sass({
			outputStyle: 'expanded'
		}).on('error', sass.logError))
		.pipe(postcss([autoprefixer()]))
		.pipe(gulp.dest(paths.styles.dest))

		.pipe(sass({
			outputStyle: 'compressed'
		}).on('error', sass.logError))
		.pipe(postcss([autoprefixer(), cssnano()]))
		.pipe(rename({ suffix: '.min' }))

		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest(paths.styles.dest))

		.pipe(browserSync.stream())
	);
	done();
}
exports.styles = styles;

function copytodocs(done){
	return(
		gulp
		.src(paths.styles.dest+'/monospaced.min.css')
		.pipe(gulp.dest(paths.docs))
	);
	done();
}
exports.copytodocs = copytodocs;

function serve(){
	browserSync.init({
		server: {
            baseDir: './'+paths.docs
        }
	});

	watch();
	gulp.watch('*.html').on('change', browserSync.reload);
}
exports.serve = serve;

function watch(){
	gulp.watch(paths.styles.src+'/*.scss', gulp.series('styles'));
	gulp.watch(paths.styles.src+'/monospaced.min.css', gulp.series('copytodocs'));
}
exports.watch = watch;

function start(){
	serve();
}
exports.default = start;
