const express = require('express');
const workout = require('../models/workout');

const app = express.Router();

app.get("/:date", (req, res) => {

    workout.get(req.params.date, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.get("/week", (req, res) => {

    workout.getweek(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});
app.post("/", (req, res) => {

    console.log(req.body);
    workout.add(req.body, (err, data) => {
        if(err) throw err;
        res.send(data);
    });

});


module.exports = app;