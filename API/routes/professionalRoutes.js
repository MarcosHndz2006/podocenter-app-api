const express = require('express');
const router = express.Router();
const professionalController = require('../controllers/professionalController');

// Define routes for CRUD operations
router.get('/', professionalController.getAllProfessionals);          // Get all professionals
router.get('/:id', professionalController.getProfessionalById);       // Get a specific professional by ID
router.post('/', professionalController.createProfessional);          // Create a new professional
router.put('/:id', professionalController.updateProfessional);        // Update an existing professional by ID
router.delete('/:id', professionalController.deleteProfessional);     // Delete a professional by ID

module.exports = router;
