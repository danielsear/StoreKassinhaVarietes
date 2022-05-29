require('dotenv').config()

const express = require('express')
const morgan = require('morgan')
const mongoose = require('mongoose')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))

app.use(require('./routes'))

const uri = process.env.MONGOOSE_URL_CONECTION

mongoose
  .connect(uri, {
    useNewUrlParser: true
  })
  .then(() => {
    console.log(' Conecting mongoose ')
  })
  .catch(err => console.error(err))

app.listen(3333, () => {
  console.log(' Server online!')
})
