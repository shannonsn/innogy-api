module.exports = function() {

    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/PlumbersData";
    mongoose.connect(mongoURL, {
        useMongoClient: true
    });

    var Database = mongoose.connection;

    Database.on('error', console.error.bind(console, 'connection error:'));
    Database.once('open', function() {
        console.log('This is Where Aweseome Takes Place');
    });

}
