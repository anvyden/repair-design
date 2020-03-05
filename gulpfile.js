const {src, dest, watch} = require('gulp');
const browserSync = require('browser-sync').create();
const minimizecss = require('gulp-clean-css');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');


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

exports.serve = bs;

// function mincss() {
//   return src('./css/*.css')
//   .pipe(minimizecss())
//   .pipe(rename({suffix: '.min'}))
//   .pipe(dest('./css'))
// };