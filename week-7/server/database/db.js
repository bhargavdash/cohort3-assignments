const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const adminSchema = new Schema({
    username: {type: String, unique: true},
    password: String
})

const userSchema = new Schema({
    username: {type: String, unique: true},
    password: String,
    courses: [{type: ObjectId}]
})

const courseSchema = new Schema({
    title: String,
    description: String, 
    price: Number,
    imageLink: String,
    published: Boolean,
    adminId: ObjectId,
})

const Admin = mongoose.model('admin', adminSchema);
const User = mongoose.model('user', userSchema);
const Course = mongoose.model('course', courseSchema);

module.exports = {
    Admin, 
    User,
    Course
}