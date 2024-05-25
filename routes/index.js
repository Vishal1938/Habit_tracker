const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habitController');

// Route for displaying the home page (list of habits)
router.get('/', habitController.home);

// Route for creating a new habit
router.post('/create-habit', habitController.createHabit);

// Route for deleting a habit
router.delete('/delete-habit/:id', habitController.deleteHabit); // Using route parameter for habit ID

// Route for displaying the edit page for a habit
router.get('/edit-habit/:id', habitController.editPage); // Using route parameter for habit ID

// Route for updating habit details
router.post('/update-habit/:id', habitController.editHabit); // Using route parameter for habit ID

console.log('router is loaded');
module.exports = router;
