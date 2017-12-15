# gulp-amp-custom

Gulp plugin to optimize CSS source for AMP HTML.

## Install

~~~
npm install --save-dev gulp-amp-custom
~~~

## Use

~~~
const gulp = require('gulp');
const ampCustom = require('gulp-amp-custom');

gulp.task('test', () => {
    gulp.src('./src/test.css')
        .pipe(ampCustom())
        .pipe(gulp.dest('./dist/'));
});
~~~

## License
[MIT License](https://github.com/kmrk/gulp-amp-custom/blob/master/LICENSE).
