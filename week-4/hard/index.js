const express = require("express");
const dotenv = require("dotenv");
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI).then(() =>{
    console.log("DB connected!!");
})

const todoRoutes = require('./routes/todo');
const userRoutes = require('./routes/user');

dotenv.config();

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get("/healthy", (req, res)=> res.send("I am Healthy"));

//  start writing your routes here
app.use('/todo', todoRoutes);
app.use('/user', userRoutes);


app.listen(port, ()=> console.log(`server is running at http://localhost:${port}`));

