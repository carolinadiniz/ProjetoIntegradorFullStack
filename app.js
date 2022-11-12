require('dotenv').config()
const express = require('express')
const consign = require('consign')
const handlebars = require('express-handlebars')
const app = express()

// Views
app.engine('handlebars', handlebars.engine())
app.set('view engine', 'handlebars')
app.set('views', './views')


// Consign
consign({})
.include('')
.then('controllers')
.then('routes')
.into(app)

app.listen(process.env.PORT, () => {
    console.log(`Server running on URL: http://localhost:${process.env.PORT}`)
})
