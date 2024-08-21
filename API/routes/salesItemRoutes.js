const express = require('express');
const router = express.Router();
const salesItemController = require('../controllers/salesItemController');

// Define routes for CRUD operations
router.get('/', salesItemController.getAllSalesItems);          // Get all sales items
router.get('/:id', salesItemController.getSalesItemById);       // Get a specific sales item by ID
router.post('/', salesItemController.createSalesItem);          // Create a new sales item
router.put('/:id', salesItemController.updateSalesItem);        // Update an existing sales item by ID
router.delete('/:id', salesItemController.deleteSalesItem);     // Delete a sales item by ID

module.exports = router;
