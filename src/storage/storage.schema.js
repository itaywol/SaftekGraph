const storageModel = require('./storage.model')
module.exports.storageTypeDefs = `
    extend type Query {
        helloWorld: String
    }

    extend type Mutation { 
        setMessage(message:String): String
    }

`

module.exports.storageResolvers = {
    Query: {
        helloWorld(_, args, context) {
            return storageModel.helloWorldHandler()
        }
    },
    Mutation: {
        setMessage(_, args, context) {
            return "Success"
        }
    }

}