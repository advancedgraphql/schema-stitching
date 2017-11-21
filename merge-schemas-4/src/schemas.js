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
      text: root => 'A fine day, good sir!'
    }
  }
  return makeExecutableSchema({ typeDefs, resolvers })
}

const additionalTypeDefs = `
type Query {
  message: Message
}

type Message {
  text: String
}
`

module.exports = {
  schemaA: makeSchemaA(),
  additionalTypeDefs
}
