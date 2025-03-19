// start writing from here

const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv')
const cors = require('cors');
dotenv.config();

const userRoutes = require('./routes/user');
const todoRoutes = require('./routes/todo');

const MONGO_URI = process.env.MONGO_URI
const PORT = process.env.PORT;
// connect to db
mongoose.connect(MONGO_URI).then(()=>{
    console.log("DB connected!!");
})

const app = express();

// to parse json 
app.use(express.json());
// to handle cors
app.use(cors());

app.get('/healthy', (req, res)=>{
    res.send("I am healthy");
})

app.use('/users', userRoutes);
app.use('/todos', todoRoutes);

app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`));
