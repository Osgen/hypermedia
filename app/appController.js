const express = require('express');
const app = express();
const task = require('./controllers/taskController');//gets all the routes for 'task'

const PORT = process.env.PORT || 3000;//sets PORT

app.use('/task', task);//sets for what route use the 'task' routing


app.listen(PORT);
