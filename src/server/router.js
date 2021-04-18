import BlogController from './controller/BlogController';
const blogController = new BlogController();

function initRouter(app) {
    app.all('*', async (req, res, next) => {
        const { body, query, headers, methods, url } = req;
        console.log('请求信息：🍉', url, methods, body, query, headers.origin, headers['user-agent']);
        res.header('Access-Control-Allow-Origin', req.headers.origin);
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
        res.header('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS');
        res.header('X-Powered-By', ' 3.2.1');
        res.header('Content-Type', 'application/json;charset=utf-8');
        // TODO 添加登录验证
        next();
    });

    app.get('/ping', (req, res) => res.send('pang'))

    app.get('/api/blog/getClassify', blogController.getBlogClassify);
    app.get('/api/blog/getAll', blogController.getAllBlogList);
    app.get('/api/blog/getList', blogController.getBlogList);
    app.get('/api/blog/getDetail', blogController.getBlogDetail);
}

export default initRouter;
