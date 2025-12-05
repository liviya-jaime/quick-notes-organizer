const Note = require('../models/noteModel');
const asyncHandler = require('express-async-handler'); // Simple tool to handle errors easily

// 1. @desc    Get all notes
//    @route   GET /api/notes
//    @access  Public (for now, will be Private later)
const getNotes = asyncHandler(async (req, res) => {
  // Find all notes in the database
  const notes = await Note.find(); 
  res.json(notes);
});

// 2. @desc    Create a new note
//    @route   POST /api/notes
//    @access  Private (will require user login later)
const createNote = asyncHandler(async (req, res) => {
  // Pull out the data sent from the frontend request
  const { title, content, category } = req.body; 

  if (!title || !content) {
    // Send an error if required fields are missing
    res.status(400);
    throw new Error('Please fill all the required fields');
  } else {
    // Create a new note object using the Note Model (Schema)
    const note = new Note({ user: req.user._id, title, content, category }); 

    // Save the new note to the database
    const createdNote = await note.save(); 
    res.status(201).json(createdNote); // Send back the newly created note
  }
});

// 3. @desc    Get single note by ID
//    @route   GET /api/notes/:id
//    @access  Public
const getNoteById = asyncHandler(async (req, res) => {
    // Find the note using the ID provided in the URL
    const note = await Note.findById(req.params.id); 

    if (note) {
        res.json(note);
    } else {
        res.status(404).json({ message: 'Note not found' });
    }
});


module.exports = { getNotes, createNote, getNoteById };