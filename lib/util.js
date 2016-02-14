'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isClassComponent = undefined;

var _ramda = require('ramda');

var isClassComponent = exports.isClassComponent = (0, _ramda.compose)((0, _ramda.is)(Object), (0, _ramda.path)(['prototype', 'isReactComponent']));