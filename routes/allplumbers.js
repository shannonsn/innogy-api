const plumberModel = require('../models/plumber.model');
const express = require('express');
const router = express.Router();


app.get('/api/plumber', function(req, res) {

    plumberModel.find({}, function(err, result) {
        if (err) {
            console.log(err);
        } else {
            res.json(result)
        }
    })

})

module.exports = router;
