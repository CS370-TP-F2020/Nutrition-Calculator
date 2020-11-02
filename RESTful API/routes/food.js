const express = require('express')
const router = express.Router()
const Food = require('../models/food')



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
        food = await Food.find({"id" : req.params.id})
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