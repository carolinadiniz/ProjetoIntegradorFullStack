require('dotenv').config()
const express = require('express')

const app = express()

app.listen(process.env.PORT, () => {
    console.log(`Server running on URL: http://localhost:${process.env.PORT}`)
})
