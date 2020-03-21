
var mongoose = require('mongoose')

function mongoconnect(callback) {

    mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true})
    var db = mongoose.connection
    db.on('error', console.error.bind(console, 'connection error:'))
    db.once('open', function() {
        callback()
    })

}

module.exports = mongoconnect