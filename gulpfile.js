(function() {
  'use strict';

  const concurrent = require('concurrent-transform');
  const del = require('del');
  const gulp = require('gulp');
  const autoprefixer = require('gulp-autoprefixer');
  const babel = require('gulp-babel');
  const concat = require('gulp-concat');
  const imagemin = require('gulp-imagemin');
  const livereload = require('gulp-livereload');
  const cleancss = require('gulp-clean-css');
  const rename = require('gulp-rename');
  const sass = require('gulp-sass');
  const uglify = require('gulp-uglify');
  const merge = require('merge-stream');

  gulp.task('styles', function() {
    return gulp
      .src(['src/scss/style.scss'])
      .pipe(sass())
      .pipe(autoprefixer('last 2 version'))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist/css'))
      .pipe(cleancss())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('dist/css'));
  });

  gulp.task('scripts', function() {
    return gulp
      .src(['node_modules/particlesjs/dist/particles.min.js', 'src/js/**/*.js'])
      .pipe(babel({ presets: ['@babel/env'] }))
      .pipe(concat('script.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'));
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
            svgoPlugins: [{ removeViewBox: false }],
          })
        )
      )
      .pipe(gulp.dest('dist/svgs'));
  });

  gulp.task('clean', function(done) {
    del.sync(['dist/**/*']);
    done();
  });

  gulp.task('watch', function() {
    livereload.listen();
    gulp.watch('src/scss/**/*.scss', gulp.series('styles'));
    gulp.watch('src/js/**/*.js', gulp.series('scripts'));
    gulp.watch('src/images/**/*', gulp.series('images'));
    gulp.watch('src/svgs/**/*', gulp.series('svgs'));
    gulp.watch(['**/*.html', 'dist/**']).on('change', livereload.changed);
  });

  gulp.task(
    'default',
    gulp.series('clean', gulp.parallel('styles', 'scripts', 'images', 'svgs'))
  );
})();
