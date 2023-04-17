const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.set("strictQuery", true);

mongoose.connect("mongodb://0.0.0.0:27017/xlxs",
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}) .then(() => console.log('Connected too MongoDB...'))
.catch(err => console.error('Could not connect to  the MongoDB...'));

userRoutes = require('./routes/userRoutes');

// app.use(express.json());
app.use('/',userRoutes);



const PORT = 4500;
app.listen(PORT,()=>{
    console.log(`Server is running on port : ${PORT}`);
});