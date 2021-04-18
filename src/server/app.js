import express from 'express';
import initRouter from './router';
import bodyParser from 'body-parser';
// import { Server } from '@webserverless/fc-express';
// import getRawBody from 'raw-body';
let app = express();

// 参数解析
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
);
app.use(bodyParser.json());

// 初始化路由
initRouter(app);

app.listen(7000, function () {
    console.log('应用实例，访问地址为 http://localhost:7000');
});

// const server = new Server(app);

// exports.handler = async (req, res, context) => {
//     req.body = await getRawBody(req);
//     server.httpProxy(req, res, context);
// };
