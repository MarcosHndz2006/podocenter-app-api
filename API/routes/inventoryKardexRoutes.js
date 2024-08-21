const express = require('express');
const router = express.Router();
const inventoryKardexController = require('../controllers/inventoryKardexController');

// Define routes for CRUD operations
router.get('/', inventoryKardexController.getAllInventoryKardex);          // Get all inventory kardex records
router.get('/:id', inventoryKardexController.getInventoryKardexById);     // Get a specific inventory kardex record by ID
router.post('/', inventoryKardexController.createInventoryKardex);        // Create a new inventory kardex record
router.put('/:id', inventoryKardexController.updateInventoryKardex);      // Update an existing inventory kardex record by ID
router.delete('/:id', inventoryKardexController.deleteInventoryKardex);   // Delete an inventory kardex record by ID

module.exports = router;
