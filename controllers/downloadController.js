const ytdl = require('ytdl-core');
const axios = require('axios');

// YouTube Downloader
exports.youtubeDownload = async (req, res) => {
  const videoUrl = req.query.url;
  if (!videoUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }
  try {
    const info = await ytdl.getInfo(videoUrl);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highestvideo' });
    res.json({
      title: info.videoDetails.title,
      url: format.url,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to download YouTube video' });
  }
};

// TikTok Downloader
exports.tiktokDownload = async (req, res) => {
  const videoUrl = req.query.url;
  if (!videoUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }
  try {
    // Menggunakan layanan pihak ketiga atau scraping
    const response = await axios.get(`https://api.tiktokdownloader.com/?url=${videoUrl}`);
    res.json({
      title: response.data.title,
      videoUrl: response.data.videoUrl,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to download TikTok video' });
  }
};

// Pinterest Downloader
exports.pinterestDownload = async (req, res) => {
  const pinUrl = req.query.url;
  if (!pinUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }
  try {
    // Implementasi scraping atau API eksternal
    const response = await axios.get(`https://api.pinterestdownloader.com/?url=${pinUrl}`);
    res.json({
      title: response.data.title,
      imageUrl: response.data.imageUrl,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to download Pinterest image' });
  }
};

// Pixiv Downloader
exports.pixivDownload = async (req, res) => {
  const pixivUrl = req.query.url;
  if (!pixivUrl) {
    return res.status(400).json({ error: 'URL is required' });
  }
  try {
    // Implementasi scraping atau API eksternal
    const response = await axios.get(`https://api.pixivdownloader.com/?url=${pixivUrl}`);
    res.json({
      title: response.data.title,
      imageUrl: response.data.imageUrl,
    });
  } catch (err) {
    res.status(500).json({ error: 'Failed to download Pixiv image' });
  }
};
