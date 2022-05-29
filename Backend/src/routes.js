const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.post('/image', multer(multerConfig).single('file'), (req, res) => {
  console.log(req.file)
  res.json({ message: 'Hello World!' })
})

module.exports = routes
