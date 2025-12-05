const express = require('express');
const { 
  getNotes, 
  createNote, 
  getNoteById 
} = require('../controllers/noteController'); // This links to the functions we will write next

const router = express.Router();

// 1. Route for getting ALL notes and for CREATING a new note
// If you send a GET request to /api/notes, it runs getNotes
// If you send a POST request to /api/notes, it runs createNote
router.route('/').get(getNotes).post(createNote);

// 2. Route for getting a SINGLE note by its ID
// If you send a GET request to /api/notes/123, it runs getNoteById
router.route('/:id').get(getNoteById); 

module.exports = router;