'use strict'

module.exports = function isFloatArray (arr) {
	if (!arr || arr.length == null) return false

	if (Array.isArray(arr) || arr instanceof Float64Array || arr instanceof Float32Array) return true

	return false
};
