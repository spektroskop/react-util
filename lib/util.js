'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isComponent = exports.isClassComponent = undefined;

var _ramda = require('ramda');

var isClassComponent = exports.isClassComponent = (0, _ramda.compose)((0, _ramda.is)(Object), (0, _ramda.path)(['prototype', 'isReactComponent']));

var isComponent = exports.isComponent = (0, _ramda.compose)((0, _ramda.is)(Function), (0, _ramda.prop)('type'));