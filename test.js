'use strict';

var a = require('assert');
var isFloat = require('./')

a.ok(isFloat(new Float64Array()))
a.ok(isFloat(new Float32Array(1)))

a.ok(!isFloat(new Uint8Array(1)))
a.ok(!isFloat(new Uint16Array(1)))
a.ok(!isFloat(new Uint32Array([0,0,0,0])))
a.ok(!isFloat(new Int8Array([0,0,0,0])))
a.ok(!isFloat(new Int16Array([0,0,0,0])))
a.ok(!isFloat(new Int32Array([0,0,0,0])))

let rand = new Array(10).fill(0).map(Math.random)
a.ok(isFloat(rand))

a.ok(!isFloat({length: 1, '0': 1 }))
