"use strict";

var _express = _interopRequireDefault(require("express"));

var _router = _interopRequireDefault(require("./router"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { Server } from '@webserverless/fc-express';
// import getRawBody from 'raw-body';
let app = (0, _express.default)(); // 参数解析

app.use(_bodyParser.default.urlencoded({
  extended: true
}));
app.use(_bodyParser.default.json()); // 初始化路由

(0, _router.default)(app);
app.listen(7000, function () {
  console.log('应用实例，访问地址为 http://localhost:7000');
}); // const server = new Server(app);
// exports.handler = async (req, res, context) => {
//     req.body = await getRawBody(req);
//     server.httpProxy(req, res, context);
// };