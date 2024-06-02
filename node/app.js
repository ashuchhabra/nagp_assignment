const express = require('express');
const { Pool } = require('pg');
const app = express();
const port = 8080;

// Database connection pool
const pool = new Pool({
  user: 'postgres',
  host: 'postgres.default.svc.cluster.local',
  database: 'mydatabase',
  password: 'securepass',
  port: 5432,
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.send('API is healthy');
});

// Readiness check endpoint
app.get('/ready', (req, res) => {
  res.send('API is ready');
});

// Endpoint to get data from the database
app.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM nagp_data');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Error retrieving data');
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
