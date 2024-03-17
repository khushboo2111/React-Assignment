require('dotenv').config()
const express = require('express')
const db = require('./config/connectDb')
const workoutRoutes = require('./routes/workouts');
const { mongo } = require('mongoose');

const app = express();


db()
app.use(express.json())
app.use('/api/workout', workoutRoutes); 



app.listen(process.env.PORT, () => {
    console.log('listening on port 4000')
})







