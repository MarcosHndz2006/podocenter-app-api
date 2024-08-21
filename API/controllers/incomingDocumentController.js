const pool = require('../db/db');  // Import the database connection

// Get all incoming documents
exports.getAllIncomingDocuments = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM incoming_document');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific incoming document by ID
exports.getIncomingDocumentById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM incoming_document WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Incoming document not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new incoming document
exports.createIncomingDocument = async (req, res) => {
    const { ccf_number, storage_id, inventory_item_id, provider_id, purchase_document_id, presentation, quantity, amount } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO incoming_document (ccf_number, storage_id, inventory_item_id, provider_id, purchase_document_id, presentation, quantity, amount) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
            [ccf_number, storage_id, inventory_item_id, provider_id, purchase_document_id, presentation, quantity, amount]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing incoming document by ID
exports.updateIncomingDocument = async (req, res) => {
    const { id } = req.params;
    const { ccf_number, storage_id, inventory_item_id, provider_id, purchase_document_id, presentation, quantity, amount } = req.body;
    try {
        const result = await pool.query(
            'UPDATE incoming_document SET ccf_number = $1, storage_id = $2, inventory_item_id = $3, provider_id = $4, purchase_document_id = $5, presentation = $6, quantity = $7, amount = $8 WHERE id = $9 RETURNING *',
            [ccf_number, storage_id, inventory_item_id, provider_id, purchase_document_id, presentation, quantity, amount, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Incoming document not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete an incoming document by ID
exports.deleteIncomingDocument = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM incoming_document WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Incoming document not found' });
        }
        res.json({ message: 'Incoming document deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
