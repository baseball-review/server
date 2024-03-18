require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const path = require('path')


const app = express()
app.use(express.json())



const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB:', err);
    process.exit(1); // Exit with error code 1
});

const port = process.env.PORT || 5000
app.listen(port, () => {
    console.log('Server is running on port', port)
})
