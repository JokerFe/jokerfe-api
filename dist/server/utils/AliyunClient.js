"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fcClient = exports.ossClient = void 0;

var _config = require("../config");

var _aliOss = _interopRequireDefault(require("ali-oss"));

var _fc = _interopRequireDefault(require("@alicloud/fc2"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// OSS数据存储
const ossClient = () => {
  return new _aliOss.default({
    accessKeyId: _config.accessKeyId,
    accessKeySecret: _config.accessKeySecret,
    region: _config.OSS.region,
    bucket: _config.OSS.bucket
  });
}; // 函数计算


exports.ossClient = ossClient;

const fcClient = () => {
  return new _fc.default(_config.accountID, {
    accessKeyID: _config.accessKeyId,
    accessKeySecret: _config.accessKeySecret,
    region: _config.FC.region,
    timeout: 30000 // 请求超时时间（毫秒），默认为10s。

  });
};

exports.fcClient = fcClient;