const pool = require('../db/db');  // Import the database connection

// Get all spaces
exports.getAllSpaces = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM spaces');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific space by ID
exports.getSpaceById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM spaces WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Space not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new space
exports.createSpace = async (req, res) => {
    const { space_name, service_unit, cost_per_service_unit, debit_account, credit_account } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO spaces (space_name, service_unit, cost_per_service_unit, debit_account, credit_account) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [space_name, service_unit, cost_per_service_unit, debit_account, credit_account]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing space by ID
exports.updateSpace = async (req, res) => {
    const { id } = req.params;
    const { space_name, service_unit, cost_per_service_unit, debit_account, credit_account } = req.body;
    try {
        const result = await pool.query(
            'UPDATE spaces SET space_name = $1, service_unit = $2, cost_per_service_unit = $3, debit_account = $4, credit_account = $5 WHERE id = $6 RETURNING *',
            [space_name, service_unit, cost_per_service_unit, debit_account, credit_account, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Space not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a space by ID
exports.deleteSpace = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM spaces WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Space not found' });
        }
        res.json({ message: 'Space deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
