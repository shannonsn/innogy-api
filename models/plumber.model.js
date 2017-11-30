var mongoose = require('mongoose');


var plumbersSchema = mongoose.Schema({
    firstName : String,
    lastName : String,
    contactDetails : Number,
    email : String,
    schedule : []

});

const registerPlumbers = mongoose.model('plumbers' , plumbersSchema);

module.exports = registerPlumbers;
