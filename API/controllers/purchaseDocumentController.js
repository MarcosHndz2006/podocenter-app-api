const pool = require('../db/db');  // Import the database connection

// Get all purchase documents
exports.getAllPurchaseDocuments = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM purchase_document');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific purchase document by ID
exports.getPurchaseDocumentById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM purchase_document WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Purchase document not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new purchase document
exports.createPurchaseDocument = async (req, res) => {
    const { provider_id, ccf_number, product_id, presentation, quantity, gross_amount, iva_amount } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO purchase_document (provider_id, ccf_number, product_id, presentation, quantity, gross_amount, iva_amount) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [provider_id, ccf_number, product_id, presentation, quantity, gross_amount, iva_amount]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing purchase document by ID
exports.updatePurchaseDocument = async (req, res) => {
    const { id } = req.params;
    const { provider_id, ccf_number, product_id, presentation, quantity, gross_amount, iva_amount } = req.body;
    try {
        const result = await pool.query(
            'UPDATE purchase_document SET provider_id = $1, ccf_number = $2, product_id = $3, presentation = $4, quantity = $5, gross_amount = $6, iva_amount = $7 WHERE id = $8 RETURNING *',
            [provider_id, ccf_number, product_id, presentation, quantity, gross_amount, iva_amount, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Purchase document not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a purchase document by ID
exports.deletePurchaseDocument = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM purchase_document WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Purchase document not found' });
        }
        res.json({ message: 'Purchase document deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
