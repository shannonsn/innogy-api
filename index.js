const express = require('express')
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const logger = require('morgan');

const app = express();

// mongo connect/Configuration
const DatabaseConnect = require('./configuration/mongoConfig');
DatabaseConnect();

// required routes
const plumberBooking = require("./routes/plumberBooking");
const registerPlumber = require("./routes/registerPlumber");
const allplumbers = require('./routes/allplumbers');

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use(logger('dev'));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', "Origin, X-Requested-With, Content-Type, Accept, Authorization, Access-Control-Allow-Credentials");
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
});

// app.get('/', (req, res) => {
//     let code = res.statusCode;
//     res.json({ code })
// })

app.use('/api/plumber', allplumbers);
app.use('/api/plumber', registerPlumber);
app.use('/api', plumberBooking)


var port = process.env.PORT || 7070;

app.listen(port, function() {
    console.log("This is where the magic happens :", port);
});
