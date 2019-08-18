
'use strict';

const mongoose = require('mongoose');

mongoose.connect('mongodb://js:hipermedia2019@ds263307.mlab.com:63307/hipermedia2019', { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  // eslint-disable-next-line
  console.log('conneted to database');
});

module.exports = mongoose;
