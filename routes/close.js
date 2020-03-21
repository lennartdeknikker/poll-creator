var express = require('express')
var router = express.Router()

const mongo = require('../mongo')
const Poll = require('../pollmodel')

router.get('/', function(req, res) {
    const code = req.query.code
    const onConnect = async function() {
    // close current poll
        const query = { code: code }
        const change = { open: false }
        const poll = await Poll.findOneAndUpdate(query, change, {new:true}, function(err) {
            if (err) return console.error(err)
        }
        )

        res.render('results', {
            voted: false,
            closing: true,
            title: `Results for poll ${code}`,
            code: poll.code,
            statement: poll.statement,
            answer1: poll.answer1.value,
            votes1: poll.answer1.votes,
            answer2: poll.answer2.value,
            votes2: poll.answer2.votes,
            answer3: poll.answer3.value,
            votes3: poll.answer3.votes,
            refreshUrl: false,
        })
    }
    mongo(onConnect)

})

module.exports = router
