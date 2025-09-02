require('dotenv').config(); // To load DATABASE_URL from .env
const express = require('express');
const { connectDB } = require('./db');

const app = express();
const PORT = process.env.PORT || 3000;

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Connect to the database first
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Main server started successfully on port ${PORT}`);
  });
});

