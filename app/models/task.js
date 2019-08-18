
'use strict';
const mongoose = require('../config'),
  taskSchema = require('../schemas').taskSchema;

const Task = mongoose.model('task', taskSchema)


module.exports = Task;
