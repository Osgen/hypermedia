let express = require('express');
let router = express.Router();

router.get('/',(req,res)=>{
    res.send("task root get");
});

router.post('/',(req,res)=>{
    res.send("task root post");
});

router.put('/',(req,res)=>{
    res.send("task root put");
});

router.delete('/',(req,res)=>{
    res.send("task root delete");
});

module.exports = router;
