var mongoose = require("mongoose");

 var bookingSchema = mongoose.Schema({
     day : String,
     slot : String,
     jobDescription : String,
     employerName : String,
     employerContact : Number
 });

 const plumberBooking = mongoose.model("booking", bookingSchema);


 module.export = plumberBooking;
