var express = require('express')
var router = express.Router()

const mongo = require('../mongo')
const Poll = require('../pollmodel')

router.get('/', function(req, res) {
    res.render('create', { title: 'New Poll', validation: true})
})

router.post('/', function(req, res) {

    const code = Math.floor(Math.random()*(999-100+1)+100)
    const statement = req.body.statement
    const answer1 = req.body.answer1
    const answer2 = req.body.answer2
    const answer3 = req.body.answer3
    const pollUrl = `${process.env.BASE_URL}/poll?code=${code}`

    if (statement && answer1 && answer2 && answer3) {
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
        setTimeout(() => {
            res.redirect(`/created?code=${code}`)            
        }, 1000)
        
    } else {
        res.render('error', { title: 'sorry, you did not fill in all the necessary fields' } )
    }

    
})

module.exports = router
