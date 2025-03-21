const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

const userRoutes = require('./routes/user');
const bookmarkRoutes = require('./routes/bookmark')

dotenv.config();

MONGO_URI = process.env.MONGO_URI;
PORT = process.env.PORT;

const mongoose = require('mongoose');

mongoose.connect(MONGO_URI).then(()=>{
  console.log("DB connected !!");
})

const app = express();
app.use(cors());
app.use(express.json());

// routes
app.use('/user', userRoutes);
app.use('/bookmark', bookmarkRoutes);

app.get('/healthy', (req, res)=>{
  res.send("Backend is healthy!!");
})



app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})