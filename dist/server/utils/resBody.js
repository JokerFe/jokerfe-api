"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.error = exports.success = void 0;

const success = data => ({
  code: 1,
  data,
  msg: 'success'
});

exports.success = success;

const error = msg => ({
  code: -1,
  data: null,
  msg
});

exports.error = error;