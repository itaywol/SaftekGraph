const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
    type Query{
        helloWorld: String
    }
`
const resolvers = {
    Query: {
        helloWorld: () => "hello world"
    }
}
const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
    console.log(`Server running at ${url}`)
})