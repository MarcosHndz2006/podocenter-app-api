const pool = require('../db/db.js');

// Create
exports.createShelf = async (req, res) => {
    const { shelf_name, number_of_levels, number_of_diversions, tags } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO shelf (shelf_name, number_of_levels, number_of_diversions, tags) VALUES ($1, $2, $3, $4) RETURNING *',
            [shelf_name, number_of_levels, number_of_diversions, tags]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Read All
exports.getAllShelves = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM shelf');
        res.status(200).json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Read One
exports.getShelfById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM shelf WHERE shelf_code = $1', [id]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'Shelf not found' });
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update
exports.updateShelf = async (req, res) => {
    const { id } = req.params;
    const { shelf_name, number_of_levels, number_of_diversions, tags } = req.body;
    try {
        const result = await pool.query(
            'UPDATE shelf SET shelf_name = $1, number_of_levels = $2, number_of_diversions = $3, tags = $4 WHERE shelf_code = $5 RETURNING *',
            [shelf_name, number_of_levels, number_of_diversions, tags, id]
        );
        if (result.rows.length === 0) return res.status(404).json({ error: 'Shelf not found' });
        res.status(200).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete
exports.deleteShelf = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM shelf WHERE shelf_code = $1 RETURNING *', [id]);
        if (result.rows.length === 0) return res.status(404).json({ error: 'Shelf not found' });
        res.status(204).send();
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
