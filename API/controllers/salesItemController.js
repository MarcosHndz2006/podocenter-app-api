const pool = require('../db/db');  // Import the database connection

// Get all sales items
exports.getAllSalesItems = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM sales_item');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific sales item by ID
exports.getSalesItemById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM sales_item WHERE id = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Sales item not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new sales item
exports.createSalesItem = async (req, res) => {
    const { service_concept_id, kardex_inventory_id, product_name, service_family, service_subfamily, unit, total, taxes, contribution, sale_price, debit_account, credit_account } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO sales_item (service_concept_id, kardex_inventory_id, product_name, service_family, service_subfamily, unit, total, taxes, contribution, sale_price, debit_account, credit_account) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING *',
            [service_concept_id, kardex_inventory_id, product_name, service_family, service_subfamily, unit, total, taxes, contribution, sale_price, debit_account, credit_account]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing sales item by ID
exports.updateSalesItem = async (req, res) => {
    const { id } = req.params;
    const { service_concept_id, kardex_inventory_id, product_name, service_family, service_subfamily, unit, total, taxes, contribution, sale_price, debit_account, credit_account } = req.body;
    try {
        const result = await pool.query(
            'UPDATE sales_item SET service_concept_id = $1, kardex_inventory_id = $2, product_name = $3, service_family = $4, service_subfamily = $5, unit = $6, total = $7, taxes = $8, contribution = $9, sale_price = $10, debit_account = $11, credit_account = $12 WHERE id = $13 RETURNING *',
            [service_concept_id, kardex_inventory_id, product_name, service_family, service_subfamily, unit, total, taxes, contribution, sale_price, debit_account, credit_account, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Sales item not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a sales item by ID
exports.deleteSalesItem = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM sales_item WHERE id = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Sales item not found' });
        }
        res.json({ message: 'Sales item deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
