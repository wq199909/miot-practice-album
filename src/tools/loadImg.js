/**
 * 得到img的地址
 * @param {*} url 图片地址
 */
const img2base64 = async (url) => {
    return new Promise(resolve => {
        const img = new Image();

        img.onload = () => {
            resolve([img.naturalWidth, img.naturalHeight]);
        };
        img.src = url;
    });
};
export default img2base64