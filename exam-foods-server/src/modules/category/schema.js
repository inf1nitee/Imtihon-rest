const { gql } = require('apollo-server-express')

module.exports = gql`
    type Categorys {
        id: ID!
        name: String!
    }


    type Query {
        categorys: [Categorys!]!
    }
`