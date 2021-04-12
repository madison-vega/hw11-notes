// Dependencies
const express = require('express');
const path = require('path');
const fs = require('fs');

// Setup Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
app.get('*', (req, res) => res.sendFile(path.join(__dirname, './public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, './public/notes.html')));





















app.listen(PORT, () => console.log(`App listening on http://localhost:" + PORT`));

