
const express = require('express') 
const logger = require('morgan')
const errorhandler = require('errorhandler')
const bodyParser = require('body-parser')
const routes = require('./routes')


let app = express()

app.use(bodyParser.json())
app.use(logger('dev'))
app.use(errorhandler())
/*app.use((req, res, next) => {
  if (!req.store)
    req.store = store
  next()
})*/

app.get('/results', routes.getResults)
app.post('/flush', routes.flushStore)
app.post('/timestamp', routes.addTimestamp)
app.post('/controller', routes.controller)

app.listen(3000)