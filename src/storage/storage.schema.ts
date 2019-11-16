const storageModel = require('./storage.model')
module.exports.storageTypeDefs = `

    type Item { 
        serialNumber: String
        name: String
        description: String
        units: Number
        images: [String]
    }

    type Storage {
        location: String
        items: [Item]
    }

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