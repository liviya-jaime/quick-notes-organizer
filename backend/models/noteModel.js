const mongoose = require('mongoose');

// Defines the structure of a single note
const noteSchema = mongoose.Schema(
  {
    // 1. Title: Must be a string, and is required
    title: {
      type: String,
      required: true,
    },
    // 2. Content: The main body of the note, must be a string, and is required
    content: {
      type: String,
      required: true,
    },
    // 3. Category (Optional): A way to tag or organize the note
    category: {
      type: String,
    },
    // 4. User: This connects the note to the user who created it (required)
    // This is a special type that links to another collection (the 'User' collection, which we will build later)
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User', 
    },
  },
  {
    // This automatically adds 'createdAt' and 'updatedAt' timestamps to every note
    timestamps: true,
  }
);

// Creates the model based on the schema and exports it
const Note = mongoose.model('Note', noteSchema);

module.exports = Note;