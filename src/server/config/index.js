
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
}
if (process.env.NODE_ENV === 'development') {
    config.env = 'development'
}

if (process.env.NODE_ENV === 'production') {
    config.env = 'production'
}

export default config;