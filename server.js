const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('./public'));

app.get('notes', (req,res) => {
    res.sendFile(path.join(__dirname, './public/index.html'));
});

app.get('notes', (req,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});

app.get('api/notes', (req, res) => {
    fs.readFile(path.join(__dirname, './public/notes.html'));
    let apiRoutes = JSON.parse(data);
    if  (apiRoutes) {
        res.json(apiRoutes);
    }
    else {
        res.send(404);
    }
});

app.post('api/notes', (req, res) =>{
    let apiRoutes = req.body;
    fs.readFile(path.join(__dirname, './db/db.json'), (err, data) => {
    const newNote = JSON.parse(data);
    const notesCont = [...newNote, notesCont];
    JSON.stringify(notesCont);
    res.json(notesCont);
    fs.writeFile(path.join(__dirname, './db/db.json'). JSON.stringify(notesCont), (err,data) =>{

    })
    })
});

app.delete('/api/notes/:id', (req, res) => {
    const id = req.params;
    const notes;
    notes.map((element, index) => {
        if (element.id == id) {
            notes= element
            notes.parse(index, 1)
            return res.json(notes);
        }
    })
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});