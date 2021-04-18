"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _BlogController = _interopRequireDefault(require("./controller/BlogController"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const blogController = new _BlogController.default();

function initRouter(app) {
  app.all('*', async (req, res, next) => {
    const {
      body,
      query,
      headers,
      methods,
      url
    } = req;
    console.log('请求信息：🍉', url, methods, body, query, headers.origin, headers['user-agent']);
    res.header('Access-Control-Allow-Origin', req.headers.origin);
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
    res.header('X-Powered-By', ' 3.2.1');
    res.header('Content-Type', 'application/json;charset=utf-8'); // TODO 添加登录验证

    next();
  });
  app.get('/ping', (req, res) => res.send('pang'));
  app.post('/post', (req, res) => res.send('post pang'));
  app.get('/api/blog/getClassify', blogController.getBlogClassify);
  app.get('/api/blog/getAll', blogController.getAllBlogList);
  app.get('/api/blog/getList', blogController.getBlogList);
  app.get('/api/blog/getDetail', blogController.getBlogDetail);
}

var _default = initRouter;
exports.default = _default;