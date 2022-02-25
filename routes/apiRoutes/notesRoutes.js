const router = require('express').Router();
let { notes } = require('../../data/db');
const { findById, createNewNote, deleteNote } = require('../../lib/notes');

//GET /api/notes

router.get('/notes', (req, res) => {
    let results = notes;
    console.log(results)
    res.json(results);
});


//GET /api/notes/:id (used for testing)

router.get('/notes/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.send(404);
    }
})



// POST /api/notes
router.post('/notes', (req, res) => {
    if (!notes) {
        req.body.id = 1
    } else {
    req.body.id = notes.length;
    }
    const note = createNewNote(req.body, notes);
    res.json(note)
});



//DELETE /api/notes/:id
router.delete('/notes/:id', (req, res) => {
    const result = deleteNote(req.params.id, notes);
    notes = result;
    console.log("delete",result);
    res.json(notes)
    
})

module.exports = router;