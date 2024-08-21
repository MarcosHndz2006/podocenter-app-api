const pool = require('../db/db');  // Import the database connection

// Get all sales documents
exports.getAllSalesDocuments = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM sales_document');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific sales document by ID
exports.getSalesDocumentById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM sales_document WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Sales document not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new sales document
exports.createSalesDocument = async (req, res) => {
    const { header, sales_item_id, product_code, quantity, gross_amount, iva_amount } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO sales_document (header, sales_item_id, product_code, quantity, gross_amount, iva_amount) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
            [header, sales_item_id, product_code, quantity, gross_amount, iva_amount]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing sales document by ID
exports.updateSalesDocument = async (req, res) => {
    const { id } = req.params;
    const { header, sales_item_id, product_code, quantity, gross_amount, iva_amount } = req.body;
    try {
        const result = await pool.query(
            'UPDATE sales_document SET header = $1, sales_item_id = $2, product_code = $3, quantity = $4, gross_amount = $5, iva_amount = $6 WHERE id = $7 RETURNING *',
            [header, sales_item_id, product_code, quantity, gross_amount, iva_amount, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Sales document not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a sales document by ID
exports.deleteSalesDocument = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM sales_document WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Sales document not found' });
        }
        res.json({ message: 'Sales document deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
