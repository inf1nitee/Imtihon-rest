const { gql } = require('apollo-server-express')

module.exports = gql`
     type Branches {
        id: ID!
        name: String!
    }

    extend type Query {
        Branches(restaranID: ID!): [Branches!]!
    }

    extend type Mutation {
        newBranche(name: String!  restaranID: ID!): [Branches]
    }
`