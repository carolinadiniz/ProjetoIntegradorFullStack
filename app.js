require('dotenv').config()
const express = require('express')
const consign = require('consign')

const app = express()

// Consign
consign({})
.include('')
.then('controllers')
.then('routes')
.into(app)

app.listen(process.env.PORT, () => {
    console.log(`Server running on URL: http://localhost:${process.env.PORT}`)
})
