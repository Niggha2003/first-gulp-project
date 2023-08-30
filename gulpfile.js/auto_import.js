const gulp           = require('gulp');
const inject = require('gulp-inject');

// tự động import file vào index.html
function injectFile() {
    const sources = gulp.src(['./assets/js/js_files/index.js','./assets/js/js_files/algorithm.js', './assets/css/*.css'], {read: false})
    return gulp.src('./index.html')
      .pipe(inject(sources, {
        transform: function (filepath) {
          if (filepath.slice(-3) === '.js') {
            return `<script type="module" src="${filepath}"></script>`;
          }
          // Use the default transform as fallback:
          return inject.transform.apply(inject.transform, arguments);
        }
      }))
      .pipe(gulp.dest('./'));
}

exports.default = injectFile;