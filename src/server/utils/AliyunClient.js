import {accountID, accessKeyId, accessKeySecret, OSS, FC} from '../config'
import OSSClient from 'ali-oss'
import FCClient from "@alicloud/fc2";

// OSS数据存储
export const ossClient = () => {
    return new OSSClient({
        accessKeyId,
        accessKeySecret,
        region: OSS.region,
        bucket: OSS.bucket
    })
}

// 函数计算
export const fcClient = () => {
    return new FCClient(accountID, {
        accessKeyID: accessKeyId,
        accessKeySecret: accessKeySecret,
        region: FC.region,
        timeout: 30000 // 请求超时时间（毫秒），默认为10s。
      });
}
