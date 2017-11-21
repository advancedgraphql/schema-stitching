const { makeExecutableSchema } = require('graphql-tools')

const makeSchemaA = () => {
  const typeDefs = `
  type Query {
    greeting: Greeting
  }
  
  type Greeting {
    text: String
  }`

  const resolvers = {
    Query: {
      greeting: () => ({text: null})
    },
    Greeting: {
      text: () => 'Hello'
    }
  }
  return makeExecutableSchema({ typeDefs, resolvers })
}

const makeSchemaB = () => {
  const typeDefs = `
  type Query {
    greeting: Greeting
  }

  type Greeting {
    text: String
  }`

  const resolvers = {
    Query: {
      greeting: () => ({text: null})      
    },
    Greeting: {
      text: root => 'A fine day, good sir!'
    }
  }

  return makeExecutableSchema({ typeDefs, resolvers })
}

module.exports = {
  schemaA: makeSchemaA(), 
  schemaB: makeSchemaB()
}
