//  start writing from here
// include mongoose , schema and ObjectId
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

// connect to mongoose in the main server file

// create schemas
const userSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

const todoSchema = new Schema({
    title: String,
    isDone: Boolean,
    timestamp: String,
    userId: ObjectId
})

const User = mongoose.model('users', userSchema);
const Todo = mongoose.model('todos', todoSchema);

module.exports = {
    User,
    Todo
}