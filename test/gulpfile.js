const gulp = require('gulp');
const ampCustom = require('gulp-amp-custom');

gulp.task('test', () => {
    gulp.src('./src/test.css')
        .pipe(ampCustom())
        .pipe(gulp.dest('./dist/'));
});
