# gulp-amp-custom

Gulp plugin to optimize CSS source for AMP HTML.

## Install

```
npm install --save-dev gulp-amp-custom
```

## Use

```js
const gulp = require('gulp');
const ampCustom = require('gulp-amp-custom');

gulp.task('test', () => {
    gulp.src('./src/test.css')
        .pipe(ampCustom({
            enableByteLimit: true
        }))
        .pipe(gulp.dest('./dist/'));
});
```

```css
/* ./src/test.css */

@charset "UTF-8";
body {
  font-size: 16px;
}
@page {
  margin: 15mm;
}
@page hoge {
  size: portrait;
  margin: 15mm;
}
a {
  color: #39c !important;
  text-decoration: none;
}
@viewport {
  min-width: 640px;
  max-width: 800px;
}
@supports not (display: flex) {
  .flexbox {
    overflow: hidden;
  }
  .flexbox div {
    float: left;
  }
}


/* ./dist/test.css */

body{font-size:16px}a{color:#39c;text-decoration:none}
```

## Options

- enableByteLimit `Boolean` - If the CSS source exceeds 50 KB, it issues an error.(Default: `false`)

## License
[MIT License](https://github.com/kmrk/gulp-amp-custom/blob/master/LICENSE).
