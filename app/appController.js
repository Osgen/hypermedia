const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/',(req, res)=>{
    res.send("QUE PEDO YA JALO por2");
});


app.listen(PORT);