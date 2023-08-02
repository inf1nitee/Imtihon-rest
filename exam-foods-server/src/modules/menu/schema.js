const { gql } = require('apollo-server-express')

module.exports = gql`
     type Menus {
        id: ID!
        name: String!
        price: Int!
    }

    extend type Query {
        Menus(branchID: ID!): [Menus!]!
        allMenu: [Menus!]!
    }

    extend type Mutation {
        newMenu(name: String! price: Int! branchID: ID!): [Menus]
    }
`