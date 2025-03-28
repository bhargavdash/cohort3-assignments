const express = require('express');
const mongoose = require('mongoose');
const userRoute = require('./routes/userRoutes')
const adminRoute = require('./routes/adminRoutes');

const dotenv = require("dotenv");
dotenv.config();
const app = express();

app.use(express.json());

const port = process.env.PORT;
const mongo_uri = process.env.MONGO_URI


// Connect to MongoDB
mongoose.connect(mongo_uri).then(()=>{
    console.log("DB connected successfully");
}); 

app.get('/healthy', (req, res)=>{
    res.send("Server is healthy");
} )

app.use('/admin', adminRoute);
app.use('/user', userRoute);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});