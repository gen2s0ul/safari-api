require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const specieRoutes = require('./routes/specieRoutes')
const animalRoutes = require('./routes/animalRoutes')
const userRoutes = require('./routes/userRoutes')

//create an express app
const app = express()

//environment variables
const db_url = process.env.DB_URL //dtabase url gotten from .env
const port = process.env.PORT || 3000 //dtabase url gotten from .env

//connect to the database
mongoose.connect(db_url)
.then(()=>{
    console.log("succesfully connected to the database");
    app.listen(port, ()=>{
        console.log(`server listening on port ${port}...`);
    })
})
.catch((err)=>{
    console.log(err.message);
})

//middlewares
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//routes
app.get('/', (req, res)=>{
    res.json({
        message: "Welcome to our Safari API"
    })
})

app.use(specieRoutes)
app.use(animalRoutes)
app.use(userRoutes)