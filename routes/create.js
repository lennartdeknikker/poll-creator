var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('create', { title: 'New Poll'})
})

module.exports = router
