const { Client } = require('pg');

// Use environment variable for database URL
const client = new Client({
  connectionString: process.env.DATABASE_URL,
});

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Database connected successfully!');
  } catch (err) {
    console.error('Database connection error:', err.stack);
    process.exit(1); // Exit if DB connection fails
  }
};

module.exports = { client, connectDB };
