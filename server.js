const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static('./public'));

app.get('api/notes', (req,res) => {

});

app.get('api/notes', (req,res) => {

})

app.post('api/notes', (req, res) =>{

})

app.delete('/api/notes/:id', (req, res) => {

})

app.listen(PORT, () => {
    
})