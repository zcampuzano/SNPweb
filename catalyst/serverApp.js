const express = require('express');
const app = express();
const mongoose = require('mongoose');
const path = require('path');
const config = require('./serverSide/config/database');

mongoose.Promise = global.Promise;
mongoose.connect(config.uri, (err) => {
  if (err) {
    console.log("Cant connect to DB " , err);
  } else {
    console.log(config.secret);
    console.log("Connected to" , config.db);
  }
});

app.use(express.static(__dirname + '/dist/'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../dist/index.html'));
});

app.listen('8080', () => {
  console.log('app is listening');
});
