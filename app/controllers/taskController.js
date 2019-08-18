const express = require('express');
const router = express.Router();
const Task = require('../models/task');

//Root request
router.route('/')
    .get( async (req,res)=>{
        let tasks = await Task.find();
        res.json(tasks);
    })
    .post( async (req,res)=>{
        let task = new Task(req.body);
        let result = await task.save();
        
        res.json({status:"Added", result});
    });

//Request by TaskName
router.route('/:taskName')
    .get( async (req, res)=>{
        let task = await Task.findOne({name:req.params.taskName});

        res.json(task);
    })
    .put( async (req, res)=>{
        let task = await Task.update({name:req.params.taskName}, req.body);

        res.json({status:"Updated"});
    })
    .delete( async (req, res)=>{
        let task = await Task.deleteOne({name:req.params.taskName});

        res.json({status:"Deleted"});
    });

module.exports = router;//Exports the entire task routing
