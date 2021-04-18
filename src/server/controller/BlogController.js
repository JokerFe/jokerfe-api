import BaseController from './BaseController';
import { success, error } from '../utils/resBody';
import { getAllMdList, getMdInfo } from '../models/BlogModel';
class BlogController extends BaseController {
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
        const classify = [
            { id: 1, name: 'JavaScript' },
            { id: 2, name: 'HTML' },
            { id: 3, name: 'CSS' },
            { id: 4, name: 'Node' },
            { id: 5, name: 'Vue' },
            { id: 6, name: 'React' },
            { id: 7, name: '工程化' },
            { id: 8, name: '算法' },
            { id: 9, name: '性能优化' },
            { id: 10, name: '前端探索' },
            { id: 11, name: '其他' },
        ];
        res.json(success(classify));
    }

    /**
     * 获取所有博客列表
     * @method GET
     * @param {*} req
     * @param {*} res
     * @returns Array
     */
    async getAllBlogList(req, res) {
        const data = await getAllMdList();
        res.json(success(data.content.toString('utf-8')));
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
            data: 'getBlogDetail',
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
        const { path } = req.query;
        if (typeof path !== "string" || !path) {
            res.json(error());
            return;
        }
        console.log('-----------------------------');
        const data = await getMdInfo(path);
        res.json(success(data.content.toString('utf-8')));
    }
}

export default BlogController;
