const express = require('express');
const router = express.Router();
const providerController = require('../controllers/providerController');

// Define routes for CRUD operations
router.get('/', providerController.getAllProviders);          // Get all providers
router.get('/:id', providerController.getProviderById);       // Get a specific provider by ID
router.post('/', providerController.createProvider);          // Create a new provider
router.put('/:id', providerController.updateProvider);        // Update an existing provider by ID
router.delete('/:id', providerController.deleteProvider);     // Delete a provider by ID

module.exports = router;
