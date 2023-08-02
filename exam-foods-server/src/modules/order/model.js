const { fetch, fetchAll } = require('../../lib/postgres')


const ORDERS = `
    SELECT
        *
    FROM
      orders
`

const NEW_ORDER = `
    INSERT INTO orders(
        order_id,
        order_name,
        order_price
    )
    VALUES($1, $2, $3)
    RETURNING *
`


const orders = () => fetchAll(ORDERS)
const newOrder = (order_id,name, price) => fetchAll(NEW_ORDER, order_id,name, price)

module.exports = {
    orders,
    newOrder
}