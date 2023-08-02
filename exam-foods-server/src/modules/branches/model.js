const { fetch, fetchAll } = require('../../lib/postgres')


const BRANCHES = `
    SELECT
        *
    FROM
      branches
    WHERE
        restaran = $1
`

const NEW_BRANCHE = `
    INSERT INTO branches(
        branch_name,
        restaran
    )
    VALUES($1, $2)
    RETURNING *
`


const branches = (id) => fetchAll(BRANCHES, id)
const newBranche = (name, restaranID) => fetchAll(NEW_BRANCHE, name, restaranID)


module.exports = {
    branches,
    newBranche
}