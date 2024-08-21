const express = require('express');
const router = express.Router();
const spacesController = require('../controllers/spacesController');

// Define routes for CRUD operations
router.get('/', spacesController.getAllSpaces);          // Get all spaces
router.get('/:id', spacesController.getSpaceById);       // Get a specific space by ID
router.post('/', spacesController.createSpace);          // Create a new space
router.put('/:id', spacesController.updateSpace);        // Update an existing space by ID
router.delete('/:id', spacesController.deleteSpace);     // Delete a space by ID

module.exports = router;
