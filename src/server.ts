const { ApolloServer } = require('apollo-server-express')
const schema = require("./schema")
const config = require('../config')

module.exports = {
    graphql: ((app) => {
        const server = new ApolloServer({
            schema: schema,
            context: ({ req, connection }) => {
                if (connection)
                    return connection.context
                else
                    return {
                        conn: {

                        },
                        token: req.headers && req.headers.authorization
                    }
            },
            playground: {
                tabs: [{
                    endpoint: '/graphql'
                }]
            }
        })
        server.applyMiddleware({ app, path: '/graphql' })
        return server
    })

}
