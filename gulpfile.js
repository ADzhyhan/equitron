const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const concat = require('gulp-concat');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create(); 

function style() {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
}

function libscss() {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.css',
  ])
    .pipe(concat('_libs.scss'))
    .pipe(gulp.dest('src/scss'))
    .pipe(browserSync.reload({stream: true}))
}

function libsjs() {
  return gulp.src([
    'node_modules/slick-carousel/slick/slick.js'
  ])
    .pipe(concat('libs.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.reload({stream: true}))
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

function script() {
  return gulp.src('./src/js/*.js')
    .pipe(gulp.dest('dist/js'))
}

async function build() {
  await style();
  await image();
  await html();
  await font();
  await script();
  await libscss();
  await libsjs();
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
  gulp.watch('./src/js/*.js', script);
}

exports.style = style;
exports.html = html;
exports.font = font;
exports.libscss = libscss; 
exports.libsjs = libsjs;
exports.image = image;
exports.script = script;
exports.build = build;
exports.watch = watch;
exports.default = build; 