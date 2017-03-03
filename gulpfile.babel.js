/***********
* Imports 
***********/
import gulp from 'gulp';
import babel from 'gulp-babel';
import changed from 'gulp-changed';
import concat from 'gulp-concat';
import filesize from 'gulp-filesize';
import uglify from 'gulp-uglify';
import watch from 'gulp-watch';
import browserSync from 'browser-sync';
import cssnano from 'gulp-cssnano';
import cssmin from 'gulp-cssmin';

/***********
* Helpers 
***********/
let src = './src',
		dest = './dist';

let events = (type, path) => {
	console.log('Event type: ' + type);
	console.log('Event path: ' + path);
}

/***********
* Tasks 
***********/
gulp.task('javascript', () => {
	return gulp.src(src + '/js/*.js')
		.pipe(changed(dest, {extension: '.js'}))
		//.pipe(babel({ presets: ['es2015', { "modules": false }] }))
		.pipe(concat('main.min.js'))
		.pipe(uglify())
		.pipe(filesize())
		.pipe(gulp.dest(dest + '/js'));
});

gulp.task('html', () => {
	return gulp.src(src + '/index.html')
		.pipe(changed(dest, {extension: '.html'}))
		.pipe(filesize())
		.pipe(gulp.dest(dest));
});

gulp.task('browser-sync', () => {
	browserSync.init(['dist'], {
		proxy: 'http://localhost/',
		browser: 'chrome',
		port: 3000,
		notify: false
	});
});

gulp.task('watch', () => {
	let javascript = gulp.watch([src + '/js/*.js'], ['javascript']),
			html = gulp.watch([src + '/index.html'], ['html']);

	javascript.on('change', (file) => {
		events("Javascript " + file.type, file.path);
	});

	html.on('change', (file) => {
		events("HTML " + file.type, file.path);
	});
});

/***********
* Global 
***********/
gulp.task('default', ['javascript', 'html', 'watch', 'browser-sync']);