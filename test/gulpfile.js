const gulp = require('gulp')
const ampCustom = require('../index')

gulp.task('default', () => {
  return gulp.src('./src/test.css')
    .pipe(ampCustom({
      enableByteLimit: true
    }))
    .pipe(gulp.dest('./dist'))
})
