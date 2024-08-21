const express = require('express');
const router = express.Router();
const inventoryItemController = require('../controllers/inventoryItemController');

// Define routes for CRUD operations
router.get('/', inventoryItemController.getAllInventoryItems);          // Get all inventory items
router.get('/:id', inventoryItemController.getInventoryItemById);       // Get a specific inventory item by ID
router.post('/', inventoryItemController.createInventoryItem);          // Create a new inventory item
router.put('/:id', inventoryItemController.updateInventoryItem);        // Update an existing inventory item by ID
router.delete('/:id', inventoryItemController.deleteInventoryItem);     // Delete an inventory item by ID

module.exports = router;
