# PostCSS Identifiers [<img src="https://postcss.github.io/postcss/logo.svg" alt="PostCSS Logo" width="90" height="90" align="right">][postcss]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Licensing][lic-img]][lic-url]
[![Changelog][log-img]][log-url]
[![Gitter Chat][git-img]][git-url]

[PostCSS Identifiers] lets you use identifiers in CSS to write intelligent
shorthands. And unlike shorthands, identifiers don’t reset every value.

```css
.margin-inline-auto {
  margin: [inline] auto;
}

.position-start {
  position: [type] absolute [start] 0;
}

/* after */

.margin-inline-auto {
  margin-left: auto;
  margin-right: auto;
}

.position-start {
  position: absolute;
  left: 0;
  top: 0;
}
```

Direction            | Shorthands  | Resulting Properties
-------------------- | ----------- | ---------------------
`inline`             | `i` `-`     | left right
`block`              | `b` `\|`    | top bottom
`start`              | `s`         | left top
`end`                | `e`         | right bottom
`inline-start`       | `is` `<`    | left
`inline-end`         | `ie` `>`    | right
`block-start`        | `bs` `^`    | top
`block-end`          | `be` `v`    | bottom
`block-inline-start` | `bis` `\|<` | left top bottom
`block-inline-end`   | `bie` `\|>` | right top bottom
`inline+block-start` | `ibs` `-^`  | left right top
`inline+block-end`   | `ibe` `-v`  | left right bottom
*(all directions)*   | `+`         | left right top bottom

## Usage

Add [PostCSS Identifiers] to your build tool:

```bash
npm install postcss-identifiers --save-dev
```

#### Node

Use [PostCSS Identifiers] to process your CSS:

```js
require('postcss-identifiers').process(YOUR_CSS, { /* options */ });
```

#### PostCSS

Add [PostCSS] to your build tool:

```bash
npm install postcss --save-dev
```

Use [PostCSS Identifiers] as a plugin:

```js
postcss([
  require('postcss-identifiers')({ /* options */ })
]).process(YOUR_CSS, /* options */);
```

#### Gulp

Add [Gulp PostCSS] to your build tool:

```bash
npm install gulp-postcss --save-dev
```

Use [PostCSS Identifiers] in your Gulpfile:

```js
var postcss = require('gulp-postcss');

gulp.task('css', function () {
  return gulp.src('./src/*.css').pipe(
    postcss([
      require('postcss-identifiers')({ /* options */ })
    ])
  ).pipe(
    gulp.dest('.')
  );
});
```

#### Grunt

Add [Grunt PostCSS] to your build tool:

```bash
npm install grunt-postcss --save-dev
```

Use [PostCSS Identifiers] in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-postcss');

grunt.initConfig({
  postcss: {
    options: {
      use: [
        require('postcss-identifiers')({ /* options */ })
      ]
    },
    dist: {
      src: '*.css'
    }
  }
});
```

[npm-url]: https://www.npmjs.com/package/postcss-identifiers
[npm-img]: https://img.shields.io/npm/v/postcss-identifiers.svg
[cli-url]: https://travis-ci.org/jonathantneal/postcss-identifiers
[cli-img]: https://img.shields.io/travis/jonathantneal/postcss-identifiers.svg
[lic-url]: LICENSE.md
[lic-img]: https://img.shields.io/npm/l/postcss-identifiers.svg
[log-url]: CHANGELOG.md
[log-img]: https://img.shields.io/badge/changelog-md-blue.svg
[git-url]: https://gitter.im/postcss/postcss
[git-img]: https://img.shields.io/badge/chat-gitter-blue.svg

[PostCSS Identifiers]: https://github.com/jonathantneal/postcss-identifiers
[PostCSS]: https://github.com/postcss/postcss
[Gulp PostCSS]: https://github.com/postcss/gulp-postcss
[Grunt PostCSS]: https://github.com/nDmitry/grunt-postcss
