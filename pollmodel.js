const mongoose = require('mongoose')

const pollSchema = new mongoose.Schema({
    code: Number,
    statement: String,
    pollUrl: String,
    answer1: {
        value: String,
        votes: Number
    },
    answer2: {
        value: String,
        votes: Number
    },
    answer3: {
        value: String,
        votes: Number
    },
    open: {
        type: Boolean,
        default: true
    } 
})


const Poll = mongoose.model('poll', pollSchema)

module.exports = Poll