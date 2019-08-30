const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();

passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 3000;

// app.get('/',(req, res)=>{
//     res.send("AVER QUE PEDO lco");
// });


app.listen(PORT);