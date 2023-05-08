const express = require('express')
const app = express()

app.get('/', onhome)
app.get('/about', onabout)
app.listen(3000)

app.use(express.static('assets'))

// 404 error if page is not found
app.use((req, res, next) => {
  res.status(404).send(
      "<h1>404 Page not found on the server</h1>")
})

function onhome (req, res) {
  res.send('<h1>Hiiihiii!</h1>')
}

function onabout (req, res) {
  res.send('<h2>Suffer :)</h2>')
}


// Voorbeeld van static mapje inladen
// app.use(express.static('naam mapje'))


// app.get('/',(req, res) => {
//   res.send('<h1>voorbeeld van de arrow function</h1>')
// });


// Les 1 manier
// app.get('/', (req, res) => {
//   res.send('Hiiihiii!')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })