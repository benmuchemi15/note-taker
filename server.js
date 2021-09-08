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
    
});

app.delete('/api/notes/:id', (req, res) => {

});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});