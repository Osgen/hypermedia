require('./models/Users');//execute user model
require('./services/passport');//execute google auth routing and saving on mongodb
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const port = process.env.PORT || 5000;
const keys = require('./config/keys');

// const proxy = require('./client/node_modules/http-proxy-middleware');

// app.use(proxy('/auth/google',{target:'http://localhost:5000'}));
// app.use(proxy('/auth/google/callback',{target:'http://localhost:5000'}));
// app.use(proxy('/api/current_user',{target:'http://localhost:5000'}));

// app.use(proxy('/api/**',{target:'http://localhost:5000'}));

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

