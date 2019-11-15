const express = require('express')
const bodyParser = require('body-parser')
const { createServer } = require('http')
const { port } = require("./config")
let apolloServer = require("./src/server")

const app = express()
app.use(bodyParser.json({ limit: '100mb' }))
apolloServer = apolloServer.graphql(app)

const httpServer = createServer(app)

httpServer.listen({ port: port }, () => {
    console.log(`Express GQL Server listening on port ${port}`)
})

app.use((err, req, res, next) => {
    res.status(404).json({
        error: err.message
    })
})

app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ error: err.message })
    next(err)
})