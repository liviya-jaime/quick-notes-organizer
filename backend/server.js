// server.js

// Add 'cors' to the imports list
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors'); // <-- NEW IMPORT

// ... rest of the imports ...

// ... connectDB() call here ...

// 2. Initialize the Express application
const app = express();

// ------------------------------------------
// New: Allow requests from the frontend port 5173
// ------------------------------------------
app.use(cors({
    origin: 'http://localhost:5173'
}));
// ------------------------------------------

app.use(express.json()); 
// ... rest of the server code here ...