"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMdInfo = exports.getAllMdList = void 0;

var _utils = require("../utils");

/**
 * 获取对应全部md列表
 */
const getAllMdList = () => {
  const path = 'blog-md/mdList.json';
  const res = (0, _utils.ossClient)().get(path);
  return res;
};
/**
 * 获取md信息
 * @param {*} path 
 * @returns 
 */


exports.getAllMdList = getAllMdList;

const getMdInfo = path => {
  const res = (0, _utils.ossClient)().get(path);
  return res;
};

exports.getMdInfo = getMdInfo;