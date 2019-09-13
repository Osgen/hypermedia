require('./models/Users');
require('./services/passport');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const keys = require('./config/keys');

mongoose.connect(keys.moongooseURI);
require('./routes/authRoutes')(app);

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));

