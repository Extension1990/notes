const express = require('express');
const router = express.Router();
const notes = require('../data/notes');

// Get all notes
router.get('/', (req, res) => {
    res.send(notes);
});

// Get note by id
router.get('/:id', (req, res) => {
    const note = notes.find((n) => n._id === req.params.id);
    res.send(note);
});

module.exports = router;