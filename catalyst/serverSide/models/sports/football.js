/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

const footballSchema = new Schema({
  fortyDash : { type  : Number, required : true }
});

module.exports = mongoose.model('Football', footballSchema);
