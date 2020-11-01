const express = require('express')
const router = express.Router()
//Import data/food.csv into db


/*
var Converter = require("csvtojson").Converter;
// create a new converter object
var converter = new Converter({});

// call the fromFile function which takes in the path to your
// csv file as well as a callback function
converter.fromFile("./food.csv", function(err, result) {
  // if an error has occured then handle it
  if (err) {
    console.log("An Error Has Occured");
    console.log(err);
  }
  // create a variable called json and store
  // the result of the conversion
  var jsonData = result;
  console.log("DATA READ")
  // log our json to verify it has worked
  console.log(jsonData);
});
*/



const Food = require('../models/food')

//

//GET ALL, sends json of all food info 
router.get('/', async (req, res) => {
    try {
        const foods = await Food.find()
        res.json(foods)
    } catch (err) {
        res.status(500).json({message: err.message})
    }
})

//GET ONE
router.get('/:id', getFood, (req, res) => {
   res.send(res.food)
})

//CREATE ONE using json 
router.post('/', async (req, res) => {
    const food = new Food({
        name: req.body.name
    })
    try {
        const newFood = await food.save()
        res.status(201).json(newFood)
    } catch (err) {
        //400 = user input error
        res.status(400).json({ message: err.message })
    }
})

//UPDATE ONE
//DELETE ONE
router.delete('/:id', getFood, async (req, res) => {
    try {
        await res.food.remove()
        res.json({message: 'Deleted food'})
    } catch {
        res.status(500).json({message: err.message})
    }

    
})

async function getFood(req, res, next) {
    let food
    try {
        food = await Food.findById(req.params.id)
        if (food == null) {
            return res.status(404).json({message: 'Cannot find food'})
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.food = food
    next()
}

module.exports = router