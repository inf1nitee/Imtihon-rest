// const typeDefs = require('./schema')
// const resolvers = require('./resolvers')
const Categorys = require('./category')
const Restarans = require('./restaran')
const Branches = require('./branches')
const Menus = require('./menu')
const Orders = require('./order')


module.exports = [
    Categorys,
    Restarans,
    Branches,
    Menus,
    Orders
]