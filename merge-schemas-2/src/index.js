const { makeExecutableSchema, mergeSchemas } = require('graphql-tools')
const { GraphQLSchema, graphql } = require('graphql')
const { schemaA, schemaB } = require('./schemas')

/*
Schema A: 

  type Query {
    greeting: String # greets: 'Hello'
  }

Schema B:

  type Query {
    greeting: String  # greets: 'A fine day, good sir!'
  }

Merged schema: 

  type Query {
    greeting: String # how should it greet?
  }

*/

// Option 1: Merge without explicitly resolving conflicts:
// Defaults to schemaB's implementation (last in array) 
// const mergedSchema = mergeSchemas({
//   schemas: [schemaA, schemaB]
// })

// Option 2: Merge by providing new resolver
const mergedSchema = mergeSchemas({
  schemas: [schemaA, schemaB],
  resolvers: mergeInfo => ({
    Query: {
      greeting: () => {
        return 'Greetings, Friend'
      }
    }
  })
})

const greetingQuery = `{greeting}`
graphql(mergedSchema, greetingQuery).then(result => {
  console.log(`Query:\n  ${greetingQuery}\nResult:\n  ${JSON.stringify(result)}`)
})
