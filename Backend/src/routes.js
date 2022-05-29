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

//USERS

routes.post('/user', async (req, res) => {
  const { name, key, email, password, admin } = req.body
  const user = await User.create({ name, key, email, password, admin })
  return res.json(user)
})

routes.get('/users', async (req, res) => {
  const users = await User.find()
  return res.json(users)
})

routes.get('/user:id', async (req, res) => {
  const user = await User.findById(req.params.id)
  return res.json(user)
})

routes.post('/user/:id', async (req, res) => {
  const user = await User.findById(req.params.id)

  await user.remove()

  return res.json({ message: 'Usuario deletado com sucesso.' })
})

module.exports = routes
