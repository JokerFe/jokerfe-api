import { ossClient } from '../utils';

/**
 * 获取对应全部md列表
 */
export const getAllMdList = () => {
    const path = 'blog-md/mdList.json';
    const res = ossClient().get(path);
    return res;
};

/**
 * 获取md信息
 * @param {*} path 
 * @returns 
 */
export const getMdInfo = (path) => {
    const res = ossClient().get(path);
    return res;
};
