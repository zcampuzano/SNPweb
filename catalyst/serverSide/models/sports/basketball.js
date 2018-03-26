/* ===================
Import Node Modules
=================== */
const mongoose = require('mongoose'); // Node Tool for MongoDB
mongoose.Promise = global.Promise; // Configure Mongoose Promises
const Schema = mongoose.Schema; // Import Schema from Mongoose

const basketballSchema = new Schema({
  number : { type  : Number, required : true },
  PTA2 : { type  : Number, required : true },
  PTM2: { type  : Number, required : true },
  PTA3 : { type  : Number, required : true },
  ASS : { type  : Number, required : true },
  BLK : { type  : Number, required : true },
  DRB : { type  : Number, required : true },
  FTA : { type  : Number, required : true },
  FTM : { type  : Number, required : true },
  ORB : { type  : Number, required : true },
  PF : { type  : Number, required : true },
  STL : { type  : Number, required : true },
  TO : { type  : Number, required : true },
  ASSPG : { type  : Number, required : true },
  STLPG : { type  : Number, required : true },
  PTP2 : { type  : Number, required : true },
  PTP3 : { type  : Number, required : true },
  ASS_TO_RATIO : { type  : Number, required : true },
  BLKPG : { type  : Number, required : true },
  FGP : { type  : Number, required : true },
  FGA : { type  : Number, required : true },
  FGM : { type  : Number, required : true },
  FTP : { type  : Number, required : true },
  GP : { type  : Number, required : true },
  MINPG : { type  : Number, required : true },
  OPP : { type  : Number, required : true },
  OPPG : { type  : Number, required : true },
  PFPG : { type  : Number, required : true },
  PPG : { type  : Number, required : true },
  RPG : { type  : Number, required : true },
  TOPG : { type  : Number, required : true },
  MIN : { type  : Number, required : true },
  PTS : { type  : Number, required : true },
  TRB : { type  : Number, required : true },
  FF : { type  : Number, required : true },
  TECHF : { type  : Number, required : true },
  DQ : { type  : Number, required : true },
  GS : { type  : Number, required : true },
  TF : { type  : Number, required : true },
  W : { type  : Number, required : true },
  L : { type  : Number, required : true },
  T : { type  : Number, required : true }
});

module.exports = mongoose.model('Basketball', basketballSchema);

module.exports.createBasketballSchema = function(newBasketballSchema, callback){
  newBasketballSchema.save(callback);
}
