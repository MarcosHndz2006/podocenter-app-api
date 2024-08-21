const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,  // Use DATABASE_URL for PostgreSQL connection
    ssl: {
        rejectUnauthorized: false
    }
});

module.exports = pool;
