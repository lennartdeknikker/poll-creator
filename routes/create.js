var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function(req, res) {
    res.render('create', { title: 'New Poll', validation: true})
})

module.exports = router
