require('dotenv').config()
const express = require('express')
const consign = require('consign')
const path = require('path')
const app = express()

// Views
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

// Consign
consign({})
.include('')
.then('controllers')
.then('routes')
.into(app)

app.listen(process.env.PORT, () => {
    console.log(`Server running on URL: http://localhost:${process.env.PORT}`)
})
