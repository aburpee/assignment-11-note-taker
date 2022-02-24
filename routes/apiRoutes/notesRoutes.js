const router = require('express').Router();
const { Notes } = require('../../data/db.json');


router.get('/', (req, res) => {
    Notes.findAll({})
    .then(dbNotesData => res.json(dbNotesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.post('/', (req, res) => {
    Notes.create({
        title: req.body.title,
        text: req.body.text
    })
    .then(dbNotesData => res.json(dbNotesData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })
});

module.exports = router;