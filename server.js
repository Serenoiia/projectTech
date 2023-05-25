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
  res.render('select-artists.ejs',{ items: artists });
})

// Upload profile picture page
app.get('/upload-picture',(req, res) => {
  res.render('upload-picture.ejs');
})

// Fill in about info
app.post('/new-about',(req, res) => {
  res.render('make-about.ejs');
})

// User profile
app.post('/profile',(req, res) => {
  res.render('profile.ejs');

  const profileData = {
    age: "22",
    username: "Serenoiia",
    bio: "Hii, I’m looking for people who want to go to sleep token with me",
  };
  
  res.render('profile', { profileData: profileData });
})

// 404 error if page is not found
app.use((req, res, next) => {
  res.status(404).send(
      "<h1>404 Page not found on the server</h1>")
})

// Array with data from artist and bands 
const artists = [
  {id:1, name: 'Sleep token', image: '/static/sleeptoken.jpg'},
  {id:2, name: 'PVRIS', image: '/static/pvris.jpg'},
  {id:3, name: 'Arctic monkeys', image: '/static/arcticmonkeys.jpg'},
  {id:4, name: 'Kovacs', image: '/static/kovacs.jpg'},
  {id:5, name: 'Melanie Martinez', image: '/static/melaniemartinez.jpg'},
  {id:6, name: 'Bring me the horizon', image: '/static/bmth.jpg'},
  {id:7, name: 'Doja Cat', image: '/static/dojacat.jpg'},
  {id:8, name: 'Grandson', image: '/static/grandson.jpg'},
  {id:9, name: 'Ashnikko', image: '/static/ashnikko.jpg'},
  {id:10, name: 'Inhaler', image: '/static/inhaler.jpg'},
  {id:11, name: 'NF', image: '/static/nf.jpg'},
  {id:12, name: 'Nothing but thieves', image: '/static/nbt.jpg'},
  {id:13, name: 'Cassyette', image: '/static/cassyette.jpg'},
  {id:14, name: 'Chase Atlantic', image: '/static/chaseatlantic.jpg'},
  {id:15, name: 'Palaye Royale', image: '/static/palayeroyale.jpg'},
  {id:16, name: 'Polyphia', image: '/static/polyphia.jpg'},
  {id:17, name: 'Maneskin', image: '/static/maneskin.jpg'},
  {id:18, name: 'Bad omens', image: '/static/badomens.jpg'},
];



