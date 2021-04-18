'use strict';

let config = {
    env: '',
    accountID: '1167603548077486',
    accessKeyId: 'LTAIHiYSyeYBmgjm',
    accessKeySecret: 'HG7TDnwIBN2AlY1UpEcrlxVwm0vSmM',
    OSS: {
        region: 'oss-cn-beijing',
        bucket: 'guohh1'
    },
    FC: {
        region: 'cn-beijing'
    }
};

{
    config.env = 'production';
}

module.exports = config;
