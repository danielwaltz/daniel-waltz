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

  gulp.task('styles', () =>
    gulp
      .src(['src/scss/style.scss'])
      .pipe(sass())
      .pipe(autoprefixer('last 2 version'))
      .pipe(concat('style.css'))
      .pipe(gulp.dest('dist/css'))
      .pipe(cleancss())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('dist/css'))
  );

  gulp.task('scripts', () =>
    gulp
      .src(['node_modules/particlesjs/dist/particles.min.js', 'src/js/**/*.js'])
      .pipe(babel({ presets: ['env'] }))
      .pipe(concat('script.js'))
      .pipe(gulp.dest('dist/js'))
      .pipe(rename({ suffix: '.min' }))
      .pipe(uglify())
      .pipe(gulp.dest('dist/js'))
  );

  gulp.task('images', () =>
    gulp
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
      .pipe(gulp.dest('dist/images'))
  );

  gulp.task('svgs', () =>
    gulp
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
      .pipe(gulp.dest('dist/svgs'))
  );

  gulp.task('clean', () => del.sync(['dist/**/*']));

  gulp.task('watch', () => {
    livereload.listen();

    gulp.watch('src/scss/**/*.scss', ['styles']);
    gulp.watch('src/js/**/*.js', ['scripts']);
    gulp.watch('src/images/**/*', ['images']);
    gulp.watch('src/svgs/**/*', ['svgs']);
    gulp.watch(['**/*.html', 'dist/**']).on('change', livereload.changed);
  });

  gulp.task('default', ['clean'], () => {
    gulp.start('styles', 'scripts', 'images', 'svgs');
  });
})();
