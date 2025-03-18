const mongoose = require('mongoose');
const { parsePSelectors } = require('puppeteer');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;
// Connect to MongoDB

// mongoose.connect('your-mongodb-url');

// Define schemas

const UserSchema = new Schema({
    // Schema definition here
    email: {type: String, unique: true},
    password: String, 
    name: String
});

const TodoSchema = new Schema({
    // Schema definition here
    title: String, 
    isDone: Boolean,
    timeStamp: String,
    userId: ObjectId
});

const User = mongoose.model('users', UserSchema);
const Todo = mongoose.model('todos', TodoSchema);

module.exports = {
    User,
    Todo
}