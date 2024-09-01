const express = require('express')
const server = express()
const port = 3000
const path = require('path');
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

server.use(express.static(path.join(__dirname, 'public')));

server.post("/checkbrowser", require("./checkBrowser"))

server.listen(port, () => {
    console.log(`Server running: http://localhost:${port}`)
})