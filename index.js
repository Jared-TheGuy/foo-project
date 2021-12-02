require('dotenv').config()

const express = require('express')

const server = express()

server.use(express.json())

server.get('/api/users', (req,res) => {
    res.json([
        {id: 1, username: "me"},
        {id: 2, username: "you"},
        {id: 3, username: "we"}
    ])
})

const PORT = process.env.PORT || 8080

server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})