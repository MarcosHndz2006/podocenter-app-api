const express = require('express');
const router = express.Router();
const storageController = require('../controllers/storageController');

// Define routes for CRUD operations
router.get('/', storageController.getAllStorages);          // Get all storage records
router.get('/:id', storageController.getStorageById);       // Get a specific storage record by ID
router.post('/', storageController.createStorage);          // Create a new storage record
router.put('/:id', storageController.updateStorage);        // Update an existing storage record by ID
router.delete('/:id', storageController.deleteStorage);     // Delete a storage record by ID

module.exports = router;
