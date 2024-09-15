const express = require('express');
const dotenv = require('dotenv');
const downloadRoutes = require('./routes/download');

// Load environment variables from .env file
dotenv.config();

// Initialize Express
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/download', downloadRoutes);

// Handle root request
app.get('/', (req, res) => {
  res.send('Welcome to the Multi-Platform Downloader API');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});