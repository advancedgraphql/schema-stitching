const { makeExecutableSchema } = require('graphql-tools')

const makeSchemaA = () => {
  const typeDefs = `
  type Query {
    hello: String
  }`

  const resolvers = {
    Query: {
      hello: () => 'Hello'
    }
  }
  return makeExecutableSchema({ typeDefs, resolvers })
}

const makeSchemaB = () => {
  const typeDefs = `
  type Query {
    goodbye: String
  }

  type Mutation {
    launchMissiles: Boolean
  }`

  const resolvers = {
    Query: {
      goodbye: () => 'Goodbye'
    },
    Mutation: {
      launchMissiles: () => Math.random() >= 0.5
    }
  }
  return makeExecutableSchema({ typeDefs, resolvers })
}

module.exports = {
  schemaA: makeSchemaA(), 
  schemaB: makeSchemaB()
}
