import { ApolloServer, gql } from 'apollo-server-micro'
import resolvers from "./resolvers"

const typeDefs = gql`
  type Query {
    cameras: [Camera!]!
  }
  type Camera {
    camera: String
    latitude: Int
    longitude: Int
  }
`
const apolloServer = new ApolloServer({ typeDefs, resolvers })

export const config = {
  api: {
    bodyParser: false,
  },
}

export default apolloServer.createHandler({ path: '/api/graphql' })
