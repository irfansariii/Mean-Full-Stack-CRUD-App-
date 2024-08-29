//Model

const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name : String,
    email : String,
    age: Number,
    address : String,
    password : String
});

//USER MODEL 
const User = mongoose.model('users', userSchema);

module.exports = User;