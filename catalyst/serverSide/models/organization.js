/* ===================
   Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

const organizationSchema = new Schema({
  name: { type: String, required: true, unique: true, lowercase : true},
  location: { type: String, required: true, unique: true, lowercase : true},
  users:  [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Organization', organizationSchema);
