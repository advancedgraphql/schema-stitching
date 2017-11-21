const { mergeSchemas } = require('graphql-tools')
const { GraphQLSchema, graphql } = require('graphql')
const { schemaA, schemaB } = require('./schemas')

/*
Schema A: 

  type Query {
    hello: String
  }

Schema B:

  type Query {
    goodbye: String
  }
  type Mutation {
    launchMissiles: Boolean
  }

Merged schema: 

  type Query {
    hello: String   # originates from schema A
    goodbye: String # originates from schema B
  }

  type Mutation {
    launchMissiles: Boolean # originates from schema B
  }

*/

const mergedSchema = mergeSchemas({ schemas: [schemaA, schemaB] })

const helloQuery = `{hello}`
graphql(mergedSchema, helloQuery).then(result => {
  console.log(`Query:\n  ${helloQuery}\nResult:\n  ${JSON.stringify(result)}`)
})

const goodbyeQuery = `{goodbye}`
graphql(mergedSchema, goodbyeQuery).then(result => {
  console.log(`Query:\n  ${goodbyeQuery}\nResult:\n  ${JSON.stringify(result)}`)
})

const launchMissilesMutation = `mutation{launchMissiles}`
graphql(mergedSchema, launchMissilesMutation).then(result => {
  console.log(`Mutation:\n  ${launchMissilesMutation}\nResult:\n  ${JSON.stringify(result)}`)
})
