const express = require('express');
const router = express.Router();
const salesDocumentController = require('../controllers/salesDocumentController');

// Define routes for CRUD operations
router.get('/', salesDocumentController.getAllSalesDocuments);          // Get all sales documents
router.get('/:id', salesDocumentController.getSalesDocumentById);       // Get a specific sales document by ID
router.post('/', salesDocumentController.createSalesDocument);          // Create a new sales document
router.put('/:id', salesDocumentController.updateSalesDocument);        // Update an existing sales document by ID
router.delete('/:id', salesDocumentController.deleteSalesDocument);     // Delete a sales document by ID

module.exports = router;
