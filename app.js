require('dotenv').config()

var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')
var indexRouter = require('./routes/index')
var pollRouter = require('./routes/poll')
var createRouter = require('./routes/create')
var createdRouter = require('./routes/created')
var closeRouter = require('./routes/close')
var voteRouter = require('./routes/vote')
var resultsRouter = require('./routes/results')


var app = express()

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/create', createRouter)
app.use('/created', createdRouter)
app.use('/close', closeRouter)
app.use('/poll', pollRouter)
app.use('/vote', voteRouter)
app.use('/results', resultsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404))
})

// error handler
app.use(function(err, req, res) {
    // set locals, only providing error in development
    res.locals.message = err.message
    res.locals.error = req.app.get('env') === 'development' ? err : {}

    // render the error page
    res.status(err.status || 500)
    res.render('error')
})

module.exports = app
