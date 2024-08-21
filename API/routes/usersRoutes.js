const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

// Define routes for CRUD operations
router.get('/', usersController.getAllUsers);          // Get all users
router.get('/:id', usersController.getUserById);       // Get a specific user by ID
router.post('/', usersController.createUser);          // Create a new user
router.put('/:id', usersController.updateUser);        // Update an existing user by ID
router.delete('/:id', usersController.deleteUser);     // Delete a user by ID

module.exports = router;
