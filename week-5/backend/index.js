// start writing from here

const express = require('express');
const mongoose = require('mongoose');

// connect to db
mongoose.connect('mongodb+srv://bhargavdash:aI7fZBQ73k8Mdcul@cluster0.orzmy.mongodb.net/todo-app').then(()=>{
    console.log("DB connected!!");
})

const app = express();

// to parse json 
app.use(express.json());

app.get('/healthy', (req, res)=>{
    res.send("I am healthy");
})

app.listen(3000, ()=> console.log("Server running on port 3000"));
