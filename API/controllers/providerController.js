const pool = require('../db/db');  // Import the database connection

// Get all providers
exports.getAllProviders = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM provider');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific provider by ID
exports.getProviderById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM provider WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Provider not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new provider
exports.createProvider = async (req, res) => {
    const { provider_name, legal_address, branch_address, contact, local_contact_number, mobile_contact_number, email_address_1, email_address_2, legal_representative_name, ncr, nit } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO provider (provider_name, legal_address, branch_address, contact, local_contact_number, mobile_contact_number, email_address_1, email_address_2, legal_representative_name, ncr, nit) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *',
            [provider_name, legal_address, branch_address, contact, local_contact_number, mobile_contact_number, email_address_1, email_address_2, legal_representative_name, ncr, nit]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing provider by ID
exports.updateProvider = async (req, res) => {
    const { id } = req.params;
    const { provider_name, legal_address, branch_address, contact, local_contact_number, mobile_contact_number, email_address_1, email_address_2, legal_representative_name, ncr, nit } = req.body;
    try {
        const result = await pool.query(
            'UPDATE provider SET provider_name = $1, legal_address = $2, branch_address = $3, contact = $4, local_contact_number = $5, mobile_contact_number = $6, email_address_1 = $7, email_address_2 = $8, legal_representative_name = $9, ncr = $10, nit = $11 WHERE id = $12 RETURNING *',
            [provider_name, legal_address, branch_address, contact, local_contact_number, mobile_contact_number, email_address_1, email_address_2, legal_representative_name, ncr, nit, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Provider not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a provider by ID
exports.deleteProvider = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM provider WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Provider not found' });
        }
        res.json({ message: 'Provider deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
