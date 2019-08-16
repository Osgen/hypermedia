const express = require('express');
const router = express.Router();
const Task = require('../models/task');

router.route('/')
    .get((req,res)=>{
        res.json({"msg":"Task root get"});
    })
    .post((req,res)=>{
    res.send("task root post");
    })
    .put((req,res)=>{
        res.send("task root put");
    })
    .delete((req,res)=>{
        res.send("task root delete");
});

module.exports = router;
