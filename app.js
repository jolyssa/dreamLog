const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')
const connectDB = require('./config/db')
 
//Load config file
dotenv.config({ path: './config/config.env' })

// Passport config
require('./config/passport')(passport)

// Connect to our database
connectDB()

// App set to express()
const app = express()

// Body parser middleware
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Method override
app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      let method = req.body._method
      delete req.body._method
      return method
    }
  }))

//Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}
// Handlebars Helpers
const { formatDate, stripTags, truncate, editIcon, select } = require('./helpers/hbs')

// Handlebars
app.engine(
    '.hbs',
    exphbs.engine({
        helpers: {
            formatDate,
            stripTags,
            truncate,
            editIcon,
            select,
        },
        defaultLayout: 'main',
        extname: '.hbs'
    })
)
app.set('view engine', '.hbs')

// Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: MongoStore.create({ mongoUrl: process.env.MONGO_URI })
    })
)

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

// Set global variable
app.use(function(req, res, next) {
    res.locals.user = req.user || null
    next()
})

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// PORT
const PORT = process.env.PORT || 3000

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))
app.use('/stories', require('./routes/stories'))

// Listening for our PORT
app.listen(
    PORT,
    console.log(`Server RUNNING 🏃🏾‍♀️ in ${process.env.NODE_ENV} mode on port ${PORT}`)
)