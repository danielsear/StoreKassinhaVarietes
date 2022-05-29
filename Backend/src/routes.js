const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

routes.post('/image', multer(multerConfig).single('file'), async (req, res) => {
  const { originalname: name, size, key } = req.file
  const image = await Image.create({
    name,
    size,
    key,
    url: ''
  })
  return res.json(image)
})

module.exports = routes
