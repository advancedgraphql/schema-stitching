const { makeExecutableSchema } = require('graphql-tools')

const makeSchemaA = () => {
  const typeDefs = `
  type Query {
    greeting: String
  }`

  const resolvers = {
    Query: {
      greeting: () => 'Hello'
    }
  }
  return makeExecutableSchema({ typeDefs, resolvers })
}

const makeSchemaB = () => {
  const typeDefs = `
  type Query {
    greeting: String
  }`

  const resolvers = {
    Query: {
      greeting: () => 'A fine day, good sir!'
    }
  }
  return makeExecutableSchema({ typeDefs, resolvers })
}

module.exports = {
  schemaA: makeSchemaA(), 
  schemaB: makeSchemaB()
}
