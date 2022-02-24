const router = require('express').Router();
const { notes } = require('../../data/db');
const { findById, createNewNote } = require('../../lib/notes');

//GET AND POST /api/notes

router.get('/notes', (req, res) => {
    let results = notes;
    console.log(results)
    res.json(results);
});

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
})

router.post('/notes', (req, res) => {
    if (!notes) {
        req.body.id = 1
    } else {
    req.body.id = notes.length;
    }
    const note = createNewNote(req.body, notes);
    res.json(note)
});

module.exports = router;