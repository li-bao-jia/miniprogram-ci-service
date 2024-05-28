const express = require('express');
const router = express.Router();
const uploadController = require('../controllers/uploadController');
const previewController = require('../controllers/previewController');

router.post('/upload', uploadController.upload);
router.post('/preview', previewController.preview);

module.exports = router;
