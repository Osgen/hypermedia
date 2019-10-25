require('./models/Users');//execute user model
require('./services/passport');//execute google auth routing and saving on mongodb
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const port = process.env.PORT || 5000;
const keys = require('./config/keys');

app.use(
    cookieSession({
        maxAge:30*24*60*60*1000,
        keys:[keys.cookieKey]        
    })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.moongooseURI);//connect to my mongodb
require('./routes/authRoutes')(app);//execute google routes

app.listen(port, () => console.log(`Escuchando en el puerto ${port}`));//execute server

