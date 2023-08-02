const { fetch, fetchAll } = require('../../lib/postgres')

const CATEGORYS = `
    SELECT
        *
    FROM
        categorys
`

const RESTARANS = `
    SELECT
        *
    FROM
        restarans
    WHERE
        category = $1
`

const NEW_RESTARAN = `
    INSERT INTO restarans(
        restaran_name,
        category
    )
    VALUES($1, $2)
    RETURNING *
`


const categorys = () => fetchAll(CATEGORYS)
const restarans = (id) => fetchAll(RESTARANS, id)
const newRestaran = (name, categoryID) => fetchAll(NEW_RESTARAN, name, categoryID)

module.exports = {
    categorys,
    restarans,
    newRestaran
}