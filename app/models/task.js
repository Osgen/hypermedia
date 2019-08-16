
'use strict';
const mongoose = require('../config/mongoose'),
  taskSchema = require('../schemas').taskSchema;

const Task = mongoose.model('task', taskSchema)


module.exports = Task;
