const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema({
    username: {type: String, unique: true},
    password: String
});

const BookmarkSchema = new Schema({
    url: String,
    category: String,
    userId: ObjectId
});

const User = mongoose.model('users', UserSchema);
const Bookmark = mongoose.model('bookmarks', BookmarkSchema);

module.exports = {
    User,
    Bookmark
}