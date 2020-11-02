require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')

const Food = require('./models/food')

//Check if Food collection is empty, if not populate it from food data csv
Food.count(function (err, count) {
    if (!err && count === 0) {
        const csvFilePath='./data/food.csv'
        const csv=require('csvtojson')
        csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            Food.insertMany(jsonObj).then(function(){
                console.log("Data inserted") //on success
            }).catch(function(error){
                console.log(error) //on error
            });
        })
    } else {
        console.log('Data already inserted')
    }
});

//Connects to MongoDB container
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('Connected to database'))

app.use(express.json())

const foodRouter = require('./routes/food')
app.use('/food', foodRouter)

app.listen(3000, () => console.log('Server started'))