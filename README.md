# gulp-amp-custom

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/gulp-amp-custom.svg)](https://badge.fury.io/js/gulp-amp-custom)
[![Build Status](https://github.com/kimulaco/gulp-amp-custom/workflows/Test/badge.svg)](https://github.com/kimulaco/gulp-amp-custom/actions)

Gulp plugin to optimize CSS source for AMP HTML.

**Maintenance of this plugin will be discontinued. Please use [postcss-amp-custom](https://github.com/kimulaco/postcss-amp-custom).**

## Install

```shell
npm install --save-dev gulp-amp-custom
```

## Use

```js
const gulp = require('gulp');
const ampCustom = require('gulp-amp-custom');

gulp.task('test', () => {
  return gulp.src('./src/test.css')
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
```

```css
/* ./dist/test.css */
body{font-size:16px}a{color:#39c;text-decoration:none}
```

## Options

### enableByteLimit

Type: `Boolean`

If the CSS source exceeds 75 KB, it issues an error.(Default: `false`)

## License

[MIT License](LICENSE).
