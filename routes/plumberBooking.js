'use strict';
const plumberModel = require('../models/plumber.model');
const express = require('express');
const router = express.Router();

router.post('/:_id/booking', (req, res) => {
    var plumberId = req.params._id;
    var employeeData = req.body;

    var employee = {
        day: employeeData.day,
        slot: employeeData.slot,
        jobDescription: employeeData.jobDescription,
        employerName: employeeData.employerName,
        employerContact: employeeData.employerContact
    }


    plumberModel.findOneAndUpdate({
        _id : plumberId
    }, {
        $push: {
            schedule : employee
        }
    }).then((result) => {
        plumberModel.findById(
            plumberId
        ).then((result) =>{
            res.json({
                result
            })
        })
    })

});
module.exports = router;
