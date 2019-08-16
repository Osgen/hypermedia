let express = require('express');
let router = express.Router();

router.route('/')
    .get((req,res)=>{
        res.send("task root get");
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
