export const success = (data) => ({
    code: 1,
    data,
    msg: 'success',
});
export const error = (msg) => ({
    code: -1,
    data: null,
    msg,
});
