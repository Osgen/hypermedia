const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({//set userSchema
    googleId:String
});

mongoose.model('users',userSchema);//create model

