const { gql } = require('apollo-server-express')

module.exports = gql`
     type Orders {
        order_id: String
        name: String!
        price: Int!
    }

    extend type Query {
        Orders: [Orders!]!
    }

    extend type Mutation {
        newOrder( order_id: String name: String! price: Int! ): [Orders]
    }
`