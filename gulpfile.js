(function() {
  'use strict';

  var concurrent = require('concurrent-transform');
  var del = require('del');
  var gulp = require('gulp');
  var autoprefixer = require('gulp-autoprefixer');
  var babel = require('gulp-babel');
  var concat = require('gulp-concat');
  var imagemin = require('gulp-imagemin');
  var livereload = require('gulp-livereload');
  var cleancss = require('gulp-clean-css');
  var rename = require('gulp-rename');
  var sass = require('gulp-sass');
  var uglify = require('gulp-uglify');
  var merge = require('merge-stream');

  gulp.task('styles', function() {
    var styles = gulp.src(['src/scss/style.scss']);

    return (
      styles
        .pipe(sass())
        .pipe(autoprefixer('last 2 version'))
        // Generate non minified version
        .pipe(concat('style.css'))
        .pipe(gulp.dest('dist/css'))
        // Generate minified version
        .pipe(cleancss())
        .pipe(
          rename({
            suffix: '.min',
          })
        )
        .pipe(gulp.dest('dist/css'))
    );
  });

  gulp.task('scripts', function() {
    var scripts = gulp.src([
      'node_modules/particlesjs/dist/particles.min.js',
      'src/js/**/*.js',
    ]);

    return (
      scripts
        .pipe(
          babel({
            presets: ['env'],
          })
        )
        // Generate non minified version
        .pipe(concat('script.js'))
        .pipe(gulp.dest('dist/js'))
        // Generate minified version
        .pipe(
          rename({
            suffix: '.min',
          })
        )
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'))
    );
  });

  gulp.task('images', function() {
    return gulp
      .src('src/images/**/*.{jpg,png,gif}')
      .pipe(
        concurrent(
          imagemin({
            optimizationLevel: 3,
            progressive: true,
            interlaced: true,
          })
        )
      )
      .pipe(gulp.dest('dist/images'));
  });

  gulp.task('svgs', function() {
    return gulp
      .src('src/svgs/**/*.svg')
      .pipe(
        concurrent(
          imagemin({
            progressive: true,
            multipass: true,
            svgoPlugins: [
              {
                removeViewBox: false,
              },
            ],
          })
        )
      )
      .pipe(gulp.dest('dist/svgs'));
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
})();
