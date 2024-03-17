require('dotenv').config()
const express = require('express')
const db = require('./config/connectDb')
const userRoutes = require('./routes/userRoutes');
const cors = require('cors')
const { mongo } = require('mongoose');
const bodyParser = require('body-parser')
const app = express();

db()
app.use(express.json())
app.use('/api/', userRoutes); 



app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})







