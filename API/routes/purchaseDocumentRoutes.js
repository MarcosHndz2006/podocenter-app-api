const express = require('express');
const router = express.Router();
const purchaseDocumentController = require('../controllers/purchaseDocumentController');

// Define routes for CRUD operations
router.get('/', purchaseDocumentController.getAllPurchaseDocuments);          // Get all purchase documents
router.get('/:id', purchaseDocumentController.getPurchaseDocumentById);       // Get a specific purchase document by ID
router.post('/', purchaseDocumentController.createPurchaseDocument);          // Create a new purchase document
router.put('/:id', purchaseDocumentController.updatePurchaseDocument);        // Update an existing purchase document by ID
router.delete('/:id', purchaseDocumentController.deletePurchaseDocument);     // Delete a purchase document by ID

module.exports = router;
