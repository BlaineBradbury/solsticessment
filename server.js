const express = require('express')
const cors = require('cors')
const server = express()
const bodyParser = require("body-parser")

const port = process.env.PORT || 3031

const fs = require("fs")

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

const routes = require("./routes/routes.js")(server, fs, cors())

server.listen( port, () => { console.log(`Server listening at ${port}`) })
