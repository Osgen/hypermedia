
'use strict';

const mongoose = require('./config/mongoose'),
      Schema = mongoose.Schema;

const schemas = {

    taskSchema: new Schema({
        name: {type: String},
        description: {type: String},
    })

};

module.exports = schemas;

