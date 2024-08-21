const express = require('express');
const router = express.Router();
const incomingDocumentController = require('../controllers/incomingDocumentController');

// Define routes for CRUD operations
router.get('/', incomingDocumentController.getAllIncomingDocuments);          // Get all incoming documents
router.get('/:id', incomingDocumentController.getIncomingDocumentById);       // Get a specific incoming document by ID
router.post('/', incomingDocumentController.createIncomingDocument);          // Create a new incoming document
router.put('/:id', incomingDocumentController.updateIncomingDocument);        // Update an existing incoming document by ID
router.delete('/:id', incomingDocumentController.deleteIncomingDocument);     // Delete an incoming document by ID

module.exports = router;
