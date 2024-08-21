const express = require('express');
const router = express.Router();
const serviceConceptController = require('../controllers/serviceConceptController');

// Define routes for CRUD operations
router.get('/', serviceConceptController.getAllServiceConcepts);          // Get all service concepts
router.get('/:id', serviceConceptController.getServiceConceptById);       // Get a specific service concept by ID
router.post('/', serviceConceptController.createServiceConcept);          // Create a new service concept
router.put('/:id', serviceConceptController.updateServiceConcept);        // Update an existing service concept by ID
router.delete('/:id', serviceConceptController.deleteServiceConcept);     // Delete a service concept by ID

module.exports = router;
