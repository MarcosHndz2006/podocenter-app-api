const pool = require('../db/db');  // Import the database connection

// Get all inventory kardex records
exports.getAllInventoryKardex = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inventory_kardex');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific inventory kardex record by ID
exports.getInventoryKardexById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM inventory_kardex WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Inventory kardex record not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new inventory kardex record
exports.createInventoryKardex = async (req, res) => {
    const { incoming_document_id, date, user_id, initial_balance, entries, exits, final_balance } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO inventory_kardex (incoming_document_id, date, user_id, initial_balance, entries, exits, final_balance) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *',
            [incoming_document_id, date, user_id, initial_balance, entries, exits, final_balance]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing inventory kardex record by ID
exports.updateInventoryKardex = async (req, res) => {
    const { id } = req.params;
    const { incoming_document_id, date, user_id, initial_balance, entries, exits, final_balance } = req.body;
    try {
        const result = await pool.query(
            'UPDATE inventory_kardex SET incoming_document_id = $1, date = $2, user_id = $3, initial_balance = $4, entries = $5, exits = $6, final_balance = $7 WHERE id = $8 RETURNING *',
            [incoming_document_id, date, user_id, initial_balance, entries, exits, final_balance, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Inventory kardex record not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete an inventory kardex record by ID
exports.deleteInventoryKardex = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM inventory_kardex WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Inventory kardex record not found' });
        }
        res.json({ message: 'Inventory kardex record deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
