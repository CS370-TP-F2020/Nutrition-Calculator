const mongoose = require('mongoose')

const foodSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    calories: {
        type: Number
    },
    protein_grams_per_hundred: {
        type: Number
    },
    carbs_grams_per_hundred: {
        type: Number
    },
    fat_grams_per_hundred: {
        type: Number
    }
})

module.exports = mongoose.model('Food', foodSchema)