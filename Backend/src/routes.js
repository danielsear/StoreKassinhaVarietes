const routes = require('express').Router()
const multer = require('multer')
const multerConfig = require('./config/multer')

const Image = require('./models/Image')

//IMAGES

routes.get('/images', async (req, res) => {
  const image = await Image.find()
  return res.json(image)
})

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

routes.post('/image/:id', async (req, res) => {
  const image = await Image.findById(req.params.id)

  await image.remove()

  return res.json({ message: 'Image deletada com sucesso.' })
})

module.exports = routes
