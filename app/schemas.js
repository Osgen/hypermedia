
'use strict';

const mongoose = require('./config'),
      Schema = mongoose.Schema;

const schemas = {

    taskSchema: new Schema({
        name: {type: String},
        description: {type: String}
    })

};

module.exports = schemas;

