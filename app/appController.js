const express = require('express');
const app = express();
const task = require('./controllers/taskController');//gets all the routes for 'task'
const parser = require('body-parser');

const PORT = process.env.PORT || 3000;//sets PORT

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/tasks', task);//sets for what route use the 'task' routing


app.listen(PORT, ()=>{"Yo Server is ON!"});
