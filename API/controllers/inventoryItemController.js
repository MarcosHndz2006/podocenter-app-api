const pool = require('../db/db');  // Import the database connection

// Get all inventory items
exports.getAllInventoryItems = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM inventory_item');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific inventory item by ID
exports.getInventoryItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM inventory_item WHERE inventory_code = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new inventory item
exports.createInventoryItem = async (req, res) => {
    const { commercial_name, main_component, secondary_component, classification, presentation, batch, expiration, pharmaceutical_company, unit, price, debit_account, credit_account } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO inventory_item (commercial_name, main_component, secondary_component, classification, presentation, batch, expiration, pharmaceutical_company, unit, price, debit_account, credit_account) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
            [commercial_name, main_component, secondary_component, classification, presentation, batch, expiration, pharmaceutical_company, unit, price, debit_account, credit_account]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing inventory item by ID
exports.updateInventoryItem = async (req, res) => {
    const { id } = req.params;
    const { commercial_name, main_component, secondary_component, classification, presentation, batch, expiration, pharmaceutical_company, unit, price, debit_account, credit_account } = req.body;
    try {
        const result = await pool.query(
            'UPDATE inventory_item SET commercial_name = $1, main_component = $2, secondary_component = $3, classification = $4, presentation = $5, batch = $6, expiration = $7, pharmaceutical_company = $8, unit = $9, price = $10, debit_account = $11, credit_account = $12 WHERE inventory_code = $13 RETURNING *',
            [commercial_name, main_component, secondary_component, classification, presentation, batch, expiration, pharmaceutical_company, unit, price, debit_account, credit_account, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete an inventory item by ID
exports.deleteInventoryItem = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM inventory_item WHERE inventory_code = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Inventory item not found' });
        }
        res.json({ message: 'Inventory item deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
