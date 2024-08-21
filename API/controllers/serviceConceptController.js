const pool = require('../db/db');  // Import the database connection

// Get all service concepts
exports.getAllServiceConcepts = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM service_concept');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific service concept by ID
exports.getServiceConceptById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM service_concept WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Service concept not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new service concept
exports.createServiceConcept = async (req, res) => {
    const { service_name, service_unit, price_per_unit, debit_account, credit_account, space_id, professional_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO service_concept (service_name, service_unit, price_per_unit, debit_account, credit_account, space_id, professional_id) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [service_name, service_unit, price_per_unit, debit_account, credit_account, space_id, professional_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing service concept by ID
exports.updateServiceConcept = async (req, res) => {
    const { id } = req.params;
    const { service_name, service_unit, price_per_unit, debit_account, credit_account, space_id, professional_id } = req.body;
    try {
        const result = await pool.query(
            'UPDATE service_concept SET service_name = $1, service_unit = $2, price_per_unit = $3, debit_account = $4, credit_account = $5, space_id = $6, professional_id = $7 WHERE id = $8 RETURNING *',
            [service_name, service_unit, price_per_unit, debit_account, credit_account, space_id, professional_id, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Service concept not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a service concept by ID
exports.deleteServiceConcept = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM service_concept WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Service concept not found' });
        }
        res.json({ message: 'Service concept deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
