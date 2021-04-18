"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BaseController = _interopRequireDefault(require("./BaseController"));

var _resBody = require("../utils/resBody");

var _BlogModel = require("../models/BlogModel");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class BlogController extends _BaseController.default {
  constructor() {
    super();
  }
  /**
   * 获取博客分类
   * @method GET
   * @param {*} req
   * @param {*} res
   */


  getBlogClassify(req, res) {
    const classify = [{
      id: 1,
      name: 'JavaScript'
    }, {
      id: 2,
      name: 'HTML'
    }, {
      id: 3,
      name: 'CSS'
    }, {
      id: 4,
      name: 'Node'
    }, {
      id: 5,
      name: 'Vue'
    }, {
      id: 6,
      name: 'React'
    }, {
      id: 7,
      name: '工程化'
    }, {
      id: 8,
      name: '算法'
    }, {
      id: 9,
      name: '性能优化'
    }, {
      id: 10,
      name: '前端探索'
    }, {
      id: 11,
      name: '其他'
    }];
    res.json((0, _resBody.success)(classify));
  }
  /**
   * 获取所有博客列表
   * @method GET
   * @param {*} req
   * @param {*} res
   * @returns Array
   */


  async getAllBlogList(req, res) {
    const data = await (0, _BlogModel.getAllMdList)();
    res.json((0, _resBody.success)(data.content.toString('utf-8')));
  }
  /**
   * 获取博客列表
   * @method GET
   * @param {*} req
   * @param {*} res
   * @returns Array
   */


  getBlogList(req, res) {
    res.json({
      data: 'getBlogDetail'
    });
  }
  /**
   * 获取博客详情
   * @method POST
   * @param {*} req
   * @param {*} res
   * @returns ArrayBuffer
   */


  async getBlogDetail(req, res) {
    const {
      path
    } = req.query;

    if (typeof path !== "string" || !path) {
      res.json((0, _resBody.error)());
      return;
    }

    console.log('-----------------------------');
    const data = await (0, _BlogModel.getMdInfo)(path);
    res.json((0, _resBody.success)(data.content.toString('utf-8')));
  }

}

var _default = BlogController;
exports.default = _default;