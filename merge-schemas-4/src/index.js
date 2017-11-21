const { makeExecutableSchema, mergeSchemas } = require('graphql-tools')
const { GraphQLSchema, graphql } = require('graphql')
const { schemaA } = require('./schemas')

const additionalTypeDefs = `
  type Query {
    message: Message
  }

  type Message {
    text: String
  }
`

const mergedSchema = mergeSchemas({
  schemas: [schemaA, additionalTypeDefs],
  resolvers: mergeInfo => ({
    Query: {
      message: (root, args, context, info) => mergeInfo.delegate(
        'query',
        'greeting',
        args,
        context,
        info
      )
    }
  })
})

const greetingQuery = `
{
  message {
    text
  }
}`
graphql(mergedSchema, greetingQuery).then(result => {
  console.log(`Query:\n  ${greetingQuery}\nResult:\n  ${JSON.stringify(result)}`)
})
