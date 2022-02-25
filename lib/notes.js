const path = require('path');
const fs = require('fs');

function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0];
    return result;
}

function deleteNote(id, notesArray) {
    const result = notesArray.filter(note => note.id != id);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: result }, null, 2)
    );
    return result;
}

function createNewNote(body, notesArray) {
    const note = body;
    notesArray.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return note;
}


module.exports = { findById, createNewNote, deleteNote};