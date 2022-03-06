const express = require('express')
const app = express()
const port = 4000

app.use((request, response, next) => {
  console.log(request.url)
  response.write('hello')
  next()
})

app.use((request, response, next) => {
  if (request.path === '/aaa') {
    response.send('这是 aaa')
  }
  next()
})

app.use('/bbb', (request, response, next) => {
  console.log('这是 bbb')
  next()
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})