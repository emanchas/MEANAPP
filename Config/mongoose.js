var config = require('./config'),
    mongoose = require('mongoose');

module.exports = function() {
  var db = mongoose.connect(config.db, {useCreateIndex: true, useNewUrlParser: true});
  
  require('../app/models/user.server.model');
  require('../app/models/book.server.model');
  
  return db;
};