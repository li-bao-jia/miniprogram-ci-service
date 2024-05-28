const previewService = require('../services/previewService');

exports.preview = async (req, res) => {
    try {
        const result = await previewService.preview(req.body);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json({state: false, message: '预览失败', data: error});
    }
};
