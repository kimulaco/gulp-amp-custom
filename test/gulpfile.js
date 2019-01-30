const gulp = require('gulp');
const ampCustom = require('gulp-amp-custom');

gulp.task('test', () => {
    return gulp.src('./src/test.css')
        .pipe(ampCustom({
            enableByteLimit: true
        }))
        .pipe(gulp.dest('./dist/'));
});
