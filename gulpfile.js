const {src, dest, watch, series} = require('gulp');
const browserSync = require('browser-sync').create();
// const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const minify = require('gulp-minify');
const htmlmin = require('gulp-htmlmin');
const tinypng = require('gulp-tinypng-compress');


// Static server
function bs() {
  serveSass();
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  watch("./*.html").on('change', browserSync.reload);
  watch("./sass/**/*.sass", serveSass);
  watch("./sass/**/*.scss", serveSass);
  watch("./js/*.js").on('change', browserSync.reload);
};

// Compile sass into CSS & auto-inject into browsers
function serveSass() {
  return src("./sass/**/*.sass", "./sass/**/*.scss")
      .pipe(sass({outputStyle:'expanded'}))
      .pipe(autoprefixer({
        cascade: false
      }))
      .pipe(dest("./css"))
      .pipe(browserSync.stream());
};


function buildCSS(done) {
  src('css/**/**.css')
    .pipe(cleanCSS({ compatibility: 'ie8' }))
    .pipe(dest('dist/css/'));
  done();
}

function buildJS(done) {
  src(['js/**.js', '!js/**.min.js'])
    .pipe(minify({ext: {
      min:'.js'
    }
  }))
    .pipe(dest('dist/js/'));
  src('js/**.min.js').pipe(dest('dist/js/'));
  done();
}

function html(done) {
  src('**.html')
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(dest('dist/'));
  done();
}

function php(done) {
  src(['**.php']).pipe(dest('dist/'));
  src('phpmailer/**/**').pipe(dest('dist/phpmailer/'));
  done();
}

function fonts(done) {
  src('fonts/**/**')
    .pipe(dest('dist/fonts/'));
  done();
}

function imagemin(done) {
  src('img/**/**.jpg')
    .pipe(tinypng({ key: 'pHXN8Km5B97Rjbc3XBBF7zjhFbP8xmgf', }))
    .pipe(dest('dist/img/'))
  src('img/**/**.png')
    .pipe(tinypng({ key: 'pHXN8Km5B97Rjbc3XBBF7zjhFbP8xmgf', }))
    .pipe(dest('dist/img/'))
  src('img/**/*.svg')
    .pipe(dest('dist/img/'))
  done();
}
  
exports.serve = bs;
exports.build = series(buildCSS, buildJS, html, php, fonts, imagemin);

// function mincss() {
//   return src('./css/*.css')
//   .pipe(minimizecss())
//   .pipe(rename({suffix: '.min'}))
//   .pipe(dest('./css'))
// };