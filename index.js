const express = require('express')
const path = require('path')
const restaurantsRouter = require('./routes/restaurants')
const logger = require('./middleware/logger')
const hbs = require('express-handlebars')
const indexRouter = require('./routes')

const app = express()

//Template engines
app.engine('hbs', hbs({ extname: 'hbs' }))
app.set('view engine', 'hbs')

//Middleware
app.use(express.static(path.join(__dirname,'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

//Custom Middleware
app.use(logger)

//Routes
app.use('/apis/restaurants', restaurantsRouter)
app.use('/', indexRouter)

app.listen(3000, () => {
  console.log('listening to port 3000')
})
