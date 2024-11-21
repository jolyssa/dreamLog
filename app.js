const path = require('path')
const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const morgan = require('morgan')
const exphbs = require('express-handlebars')
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

//Logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

// Template engine - Handlebars
app.engine('.hbs', exphbs.engine({ defaultLayout: 'main', extname: '.hbs' }))
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

// Static folder
app.use(express.static(path.join(__dirname, 'public')))

// PORT
const PORT = process.env.PORT || 3000

// Routes
app.use('/', require('./routes/index'))
app.use('/auth', require('./routes/auth'))

// Listening for our PORT
app.listen(
    PORT,
    console.log(`Server RUNNING 🏃🏾‍♀️ in ${process.env.NODE_ENV} mode on port ${PORT}`)
)