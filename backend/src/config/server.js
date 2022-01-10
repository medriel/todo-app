const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()

server.use(bodyParser.urlencoded({ express: true }))
server.use(bodyParser.json())

server.listen(port, function () {
  console.log(`BACKEND in running on port ${port}.`)
})