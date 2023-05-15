const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')
app.use(express.static('assets'))
app.listen(3000)

// Home
app.get('/',(req, res) => {
  res.send('<h1>Hiiihiii!</h1>')
})
// Make new profile page
app.get('/new-profile',(req, res) => {
  res.render('make-profile.ejs');
})
// Select the band/artist page
app.post('/select-artists',(req, res) => {
  res.render('select-artists.ejs');
})
// Upload profile picture page
app.get('/upload-picture',(req, res) => {
  res.render('upload-picture.ejs');
})
// Fill in about info
app.post('/new-about',(req, res) => {
  res.render('make-about.ejs');
})
// 404 error if page is not found
app.use((req, res, next) => {
  res.status(404).send(
      "<h1>404 Page not found on the server</h1>")
})


