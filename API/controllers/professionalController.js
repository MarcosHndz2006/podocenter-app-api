const pool = require('../db/db');  // Import the database connection

// Get all professionals
exports.getAllProfessionals = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM professional');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific professional by ID
exports.getProfessionalById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM professional WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Professional not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new professional
exports.createProfessional = async (req, res) => {
    const { job_title, service_unit, cost_per_service_unit, debit_account, credit_account } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO professional (job_title, service_unit, cost_per_service_unit, debit_account, credit_account) VALUES ($1, $2, $3, $4, $5) RETURNING *',
            [job_title, service_unit, cost_per_service_unit, debit_account, credit_account]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing professional by ID
exports.updateProfessional = async (req, res) => {
    const { id } = req.params;
    const { job_title, service_unit, cost_per_service_unit, debit_account, credit_account } = req.body;
    try {
        const result = await pool.query(
            'UPDATE professional SET job_title = $1, service_unit = $2, cost_per_service_unit = $3, debit_account = $4, credit_account = $5 WHERE id = $6 RETURNING *',
            [job_title, service_unit, cost_per_service_unit, debit_account, credit_account, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Professional not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a professional by ID
exports.deleteProfessional = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM professional WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Professional not found' });
        }
        res.json({ message: 'Professional deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
