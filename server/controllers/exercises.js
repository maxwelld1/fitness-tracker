const express = require('express');
const exercise = require('../models/exercise');

const app = express.Router();

app.get("/", (req, res) => {

    exercise.get((err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.get("/:exercise", (req, res) => {

    exercise.getHighest(req.params.exercise, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.post("/", (req, res) => {

    console.log(req.body);
    exercise.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});


module.exports = app;