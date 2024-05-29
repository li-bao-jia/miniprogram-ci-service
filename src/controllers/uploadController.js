const uploadService = require('../services/uploadService');

exports.upload = async (req, res) => {
    try {
        const result = await uploadService.upload(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(200).json({state: false, message: '上传失败', data: error});
    }
};
