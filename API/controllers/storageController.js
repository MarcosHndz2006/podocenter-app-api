const pool = require('../db/db');  // Import the database connection

// Get all storage records
exports.getAllStorages = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM storage');
        res.json(result.rows);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Get a specific storage record by ID
exports.getStorageById = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('SELECT * FROM storage WHERE storage_code = $1', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Storage not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Create a new storage record
exports.createStorage = async (req, res) => {
    const { storage_name, location_name, tags, shelf_id } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO storage (storage_name, location_name, tags, shelf_id) VALUES ($1, $2, $3, $4) RETURNING *',
            [storage_name, location_name, tags, shelf_id]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Update an existing storage record by ID
exports.updateStorage = async (req, res) => {
    const { id } = req.params;
    const { storage_name, location_name, tags, shelf_id } = req.body;
    try {
        const result = await pool.query(
            'UPDATE storage SET storage_name = $1, location_name = $2, tags = $3, shelf_id = $4 WHERE storage_code = $5 RETURNING *',
            [storage_name, location_name, tags, shelf_id, id]
        );
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Storage not found' });
        }
        res.json(result.rows[0]);
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};

// Delete a storage record by ID
exports.deleteStorage = async (req, res) => {
    const { id } = req.params;
    try {
        const result = await pool.query('DELETE FROM storage WHERE storage_code = $1 RETURNING *', [id]);
        if (result.rows.length === 0) {
            return res.status(404).json({ error: 'Storage not found' });
        }
        res.json({ message: 'Storage deleted successfully' });
    } catch (err) {
        console.error(err.message);
        res.status(500).json({ error: 'Internal server error' });
    }
};
