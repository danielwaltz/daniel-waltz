(function(){
	'use strict';

	var concurrent   = require('concurrent-transform'),
		del          = require('del'),
		gulp         = require('gulp'),
		autoprefixer = require('gulp-autoprefixer'),
		concat       = require('gulp-concat'),
		imagemin     = require('gulp-imagemin'),
		livereload   = require('gulp-livereload'),
		minifycss    = require('gulp-minify-css'),
		notify       = require('gulp-notify'),
		rename       = require('gulp-rename'),
		sass         = require('gulp-sass'),
		uglify       = require('gulp-uglify'),
		merge        = require('merge-stream');

	gulp.task('styles', function() {
		var styles = gulp.src([
			'node_modules/font-awesome/scss/font-awesome.scss',
			'src/scss/style.scss'
		]);

		return styles
			.pipe(sass())
			.pipe(autoprefixer('last 2 version'))

			// Generate non minified version
			.pipe(concat('style.css'))
			.pipe(gulp.dest('dist/css'))

			// Generate minified version
			.pipe(minifycss())
			.pipe(rename({suffix: '.min'}))
			.pipe(gulp.dest('dist/css'))

			.pipe(notify({ message: 'Styles Processed' }));
	});

	gulp.task('scripts', function() {
		var scripts = gulp.src([
			'src/js/**/*.js'
		]);

		return scripts
			// Generate non minified version
			.pipe(concat('script.js'))
			.pipe(gulp.dest('dist/js'))

			// Generate minified version
			.pipe(rename({suffix: '.min'}))
			.pipe(uglify())
			.pipe(gulp.dest('dist/js'))

			.pipe(notify({ message: 'Scripts Processed' }));
	});

	gulp.task('assets', function() {
		// Font awesome fonts
		var fontawesome = gulp.src('node_modules/font-awesome/fonts/**/*.{ttf,otf,eot,eof,woff,woff2,svg}')
			.pipe(gulp.dest('dist/fonts'));

		// HTML5shiv
		var html5shiv = gulp.src('node_modules/html5shiv/dist/html5shiv.min.js')
			.pipe(gulp.dest('dist/js/lib'));

		return merge(fontawesome, html5shiv);
	});

	gulp.task('images', function() {
		return gulp.src('src/images/**/*.{jpg,png,gif}')
			.pipe(concurrent(
				imagemin({
					optimizationLevel: 3,
					progressive: true,
					interlaced: true
				})
			))
			.pipe(gulp.dest('dist/images'))
			.pipe(notify({ message: 'Image Processed' }));
	});

	gulp.task('svgs', function() {
		return gulp.src('src/svgs/**/*.svg')
			.pipe(concurrent(
				imagemin({
					progressive: true,
					multipass: true,
					svgoPlugins: [{removeViewBox: false}]
				})
			))
			.pipe(gulp.dest('dist/svgs'))
			.pipe(notify({ message: 'SVG Processed' }));
	});

	gulp.task('clean', function() {
		return del.sync(['dist/**/*']);
	});

	gulp.task('watch', function() {
		livereload.listen();

		gulp.watch('src/scss/**/*.scss', ['styles']);
		gulp.watch('src/js/**/*.js', ['scripts']);
		gulp.watch('src/images/**/*', ['images']);
		gulp.watch('src/svgs/**/*', ['svgs']);
		gulp.watch(['**/*.php', 'dist/**']).on('change', livereload.changed);
	});

	gulp.task('default', ['clean'], function() {
		gulp.start('styles', 'scripts', 'assets', 'images', 'svgs');
	});
}());
