# is-float-array [![Build Status](https://travis-ci.org/dy/is-float-array.svg?branch=master)](https://travis-ci.org/dy/is-float-array) [![unstable](https://img.shields.io/badge/stability-unstable-green.svg)](http://github.com/badges/stability-badges)

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
