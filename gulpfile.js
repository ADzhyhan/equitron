const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
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

function html() {
  return gulp.src('./src/*.html')
    .pipe(gulp.dest('dist/'))
}

function font() {
  return gulp.src('./src/fonts/*')
    .pipe(gulp.dest('dist/fonts'))
}

function image() {
  return gulp.src('./src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'))
}

async function build() {
  await style();
  await image();
  await html();
  await font();
}

function watch() {
  browserSync.init({
    server: {
      baseDir: "./dist",
      index: 'index.html'
    }
  });
  gulp.watch('./src/scss/**/*.scss', style);
  gulp.watch('./src/img/*', image); 
  gulp.watch('./src/*.html', html); 
  gulp.watch('./src/fonts/*', font);
}

exports.style = style;
exports.html = html;
exports.font = font;
exports.image = image;
exports.build = build;
exports.watch = watch;
exports.default = build; 