const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function style() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}


async function build() {
  await style();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist",
      index: 'index.html'
    }
  });
  gulp.watch('./src/scss/**/*.scss', style);
}

exports.style = style;
exports.build = build;
exports.watch = watch;
exports.default = build;