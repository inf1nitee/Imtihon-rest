const { gql } = require('apollo-server-express')

module.exports = gql`
     type Restarans {
        id: ID!
        name: String!
    }

    extend type Query {
        Restarans(categoryID: ID!): [Restarans!]!
    }

    extend type Mutation {
        newRestaran(name: String!  categoryID: ID!): [Restarans]
    }
`