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
app.get('/api/notes', (req, res) => fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) throw err;
}));
app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    fs.readFile('./db/db.json', 'utf8', (err, data) => {
        if (err) throw err;
        data.push(newNote);

    });

    

    return res.json(newNote);

})





















app.listen(PORT, () => console.log(`App listening on http://localhost:" + PORT`));

