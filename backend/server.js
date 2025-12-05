// server.js

// ... imports here (express, dotenv, mongoose) ...
// Note: You need to install the asyncHandler package now!
const asyncHandler = require('express-async-handler'); 

// ... connectDB function here ...

// Import the new note routes file
const noteRoutes = require('./routes/noteRoutes'); // <-- NEW IMPORT

// ... connectDB() call here ...

// 2. Initialize the Express application
const app = express();
app.use(express.json()); // <-- IMPORTANT: Allows the server to accept JSON data from the frontend

// ------------------------------------------
// New: Tells the server to use the note routes
// ------------------------------------------
app.use('/api/notes', noteRoutes); // If anyone goes to /api/notes, use the logic in noteRoutes.js
// ------------------------------------------

// ... rest of the server code here ...