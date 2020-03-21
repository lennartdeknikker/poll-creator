var express = require('express')
var router = express.Router()

const mongo = require('../mongo')
const Poll = require('../pollmodel')

let counter = 99

/* GET users listing. */
router.post('/', function(req, res) {

    counter++

    const code = counter
    const statement = req.body.statement
    const answer1 = req.body.answer1
    const answer2 = req.body.answer2
    const answer3 = req.body.answer3
    const pollUrl = `${process.env.BASE_URL}/poll?code=${code}`

    const testPoll = new Poll({
        code: code,
        pollUrl: pollUrl,
        statement: statement,
        answer1: {
            value: answer1,
            votes: 0
        },
        answer2: {
            value: answer2,
            votes: 0
        },
        answer3: {
            value: answer3,
            votes: 0
        },
    })

    const onConnect = function() {
        testPoll.save(function (err) {
            if (err) return console.error(err); else {
                console.log(`Added poll ${testPoll.code} to database`)
            }
        })
    }

    mongo(onConnect)


    res.render('created', { title: 'Poll created', code: code, statement: statement, pollUrl: pollUrl})
})

module.exports = router
