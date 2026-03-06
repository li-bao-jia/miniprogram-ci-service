const uploadService = require('../services/uploadService');

exports.upload = async (req, res) => {
    try {
        const result = await uploadService.upload(req.body);
        res.status(200).json(result);
    } catch (error) {
        const message = error && error.message ? error.message : '上传失败';
        res.status(200).json({
            state: false,
            message,
            data: {errCode: -1, errMsg: message}
        });
    }
};
