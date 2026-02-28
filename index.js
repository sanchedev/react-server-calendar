const express = require('express')

const app = express()

const router = require('./dist/server.js').default

app.use(express.static('public/'))
app.use(router)

app.listen(3000, () => {
  console.log('http://localhost:3000')
})

// module.exports = app // To use with vercel
