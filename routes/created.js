var express = require('express')
var router = express.Router()

const mongo = require('../mongo')
const Poll = require('../pollmodel')

router.get('/', function(req, res) {
    
    const code = req.query.code

    const onConnect = function() {
        Poll.findOne({ code: code }, function (err, poll) {
            if (err) {
                if(err.code == 11000) {
                    res.render('error', { title: 'Sorry, something went wrong saving your poll to the database. Try again in a few minutes please.' })
                }
                else {
                    return res.send( err )
                }
            }
            if (poll) {
                res.render('created', { 
                    title: 'Poll created', 
                    code: code, 
                    statement: poll.statement, 
                    pollUrl: poll.pollUrl, 
                    copyButton: true
                })                
            } else {
                res.render('error', { title: 'Sorry, something went wrong saving your poll to the database. Try again in a few minutes please.' })
            }
        }) 
    }

    mongo(onConnect)
    
})

module.exports = router
