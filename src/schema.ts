const { merge } = require('lodash')
const { makeExecutableSchema } = require('graphql-tools')
const GraphQLJSON = require('graphql-type-json')
const rootTypeDefs = require('./root.schema')
const { storageTypeDefs, storageResolvers } = require("./storage/storage.schema")

const execSchema = makeExecutableSchema({
    typeDefs: [rootTypeDefs, storageTypeDefs],
    resolvers: merge({ JSON: GraphQLJSON }, storageResolvers),
    formatError: error => {
        console.log('Schema Error:', error)
        return new Error('internal server error')
    }
})

module.exports = execSchema