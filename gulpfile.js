(function(){
  'use strict';

  var concurrent   = require('concurrent-transform'),
    del          = require('del'),
    gulp         = require('gulp'),
    autoprefixer = require('gulp-autoprefixer'),
    babel        = require('gulp-babel'),
    concat       = require('gulp-concat'),
    imagemin     = require('gulp-imagemin'),
    livereload   = require('gulp-livereload'),
    cleancss     = require('gulp-clean-css'),
    notify       = require('gulp-notify'),
    rename       = require('gulp-rename'),
    sass         = require('gulp-sass'),
    uglify       = require('gulp-uglify'),
    merge        = require('merge-stream');

  gulp.task('styles', function() {
    var styles = gulp.src([
      'src/scss/style.scss'
    ]);

    return styles
      .pipe(sass())
      .pipe(autoprefixer('last 2 version'))

      // Generate non minified version
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist/css'))

      // Generate minified version
      .pipe(cleancss())
      .pipe(rename({suffix: '.min'}))
      .pipe(gulp.dest('dist/css'))

      .pipe(notify({ message: 'Styles Processed' }));
  });

  gulp.task('scripts', function() {
    var scripts = gulp.src([
      'src/js/**/*.js'
    ]);

    return scripts
      .pipe(babel({
        presets: ['es2015']
      }))

      // Generate non minified version
      .pipe(concat('script.js'))
      .pipe(gulp.dest('dist/js'))

      // Generate minified version
      .pipe(rename({suffix: '.min'}))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))

      .pipe(notify({ message: 'Scripts Processed' }));
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
    gulp.watch(['**/*.html', 'dist/**']).on('change', livereload.changed);
  });

  gulp.task('default', ['clean'], function() {
    gulp.start('styles', 'scripts', 'images', 'svgs');
  });
}());
