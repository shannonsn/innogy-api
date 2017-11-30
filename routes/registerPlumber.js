'use strict';
const plumberModel = require('../models/plumber.model');
const express = require('express');
const router = express.Router();



router.post('/', (req, res) => {
    let user = req.body;
    let code = res.statusCode;
    console.log(user);



    plumberModel.create({
            firstName: user.firstName,
            lastName: user.lastName,
            contactDetails: user.contactDetails,
            email: user.email,
            schedule: []
        })
        .then((user) => {
            res.json({
                code,
                user
            })
        })
        .catch((err) => {
            res.json({
                code,
                err
            });
        })
});

module.exports = router;
