# is-float-array [![Build Status](https://travis-ci.org/audiojs/is-float-array.svg?branch=master)](https://travis-ci.org/audiojs/is-float-array) [![Greenkeeper badge](https://badges.greenkeeper.io/audiojs/is-float-array.svg)](https://greenkeeper.io/) [![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

Test if an array can store floats. In particular, _Float32Array_, _Float64Array_ and _Array_ are detected as float arrays.

## Usage

[![npm install is-float-array](https://nodei.co/npm/is-float-array.png?mini=true)](https://npmjs.org/package/is-float-array/)

```js
var isFloat = require('is-float-array');

isFloat(Array(10)) // true
isFloat(new Float32Array(10)) // true
isFloat(new Float64Array(10)) // true
isFloat(new Uint8Array(10)) // false
```

## License

© 2018 Dmitry Yv. MIT License.
