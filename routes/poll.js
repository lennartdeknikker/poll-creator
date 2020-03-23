var express = require('express')
var router = express.Router()

const mongo = require('../mongo')
const Poll = require('../pollmodel')

/* GET home page. */
router.get('/', function(req, res) {
    const code = req.query.code

    const onConnect = function() {
        Poll.findOne({ code: code }, function (err, poll) {
            if (err) {
                if(err.code == 11000) {
                    res.render('error', { title: 'poll does not exist' })
                }
                else {
                    return res.send( err )
                }
            }
            if (poll) {
                if (poll.open === true) {
                    res.render('poll', { 
                        title: `Poll ${code}`,
                        code: poll.code,
                        statement: poll.statement,
                        answer1: poll.answer1.value,
                        answer2: poll.answer2.value,
                        answer3: poll.answer3.value
                    })
                } else {
                    res.render('closed', {title: 'this poll is already closed', code: code})
                }
                
            } else {
                res.render('error', { title: 'This poll does not exist' })
            }

            // if(err) return next(err);
            // if (poll) {
            //   if (0 === poll.length) return next(new NotFoundError);
            //   res.render('poll', { 
            //     title: `Poll ${code}`,
            //     code: poll.code,
            //     statement: poll.statement,
            //     answer1: poll.answer1.value,
            //     answer2: poll.answer2.value,
            //     answer3: poll.answer3.value
            //   });
            // }      
        }) 
    }

    mongo(onConnect)

})

module.exports = router
