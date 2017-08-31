/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

const athleteSchema = new Schema({
  baseballStat : { type : mongoose.Schema.Types.ObjectId, ref: 'Baseball'},
  footballStat : { type : mongoose.Schema.Types.ObjectId, ref: 'Football'}
});

module.exports = mongoose.model('Baseball', athleteSchema);
