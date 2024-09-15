const express = require('express');
const { youtubeDownload, tiktokDownload, pinterestDownload, pixivDownload } = require('../controllers/downloadController');
const router = express.Router();

router.get('/youtube', youtubeDownload);
router.get('/tiktok', tiktokDownload);
router.get('/pinterest', pinterestDownload);
router.get('/pixiv', pixivDownload);

module.exports = router;
