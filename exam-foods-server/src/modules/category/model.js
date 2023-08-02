const { fetch, fetchAll } = require('../../lib/postgres')

const CATEGORYS = `
    SELECT
        *
    FROM
        categorys
`

const REGIONS = `
    SELECT
        *
    FROM
        regions
    WHERE
        country_id = $1
`

const NEW_REGION = `
    INSERT INTO regions(
        region_name,
        country_id,
        region_price
    )
    VALUES($1, $2,$3)
    RETURNING *
`


const categorys = () => fetchAll(CATEGORYS)
const regions = (id) => fetchAll(REGIONS, id)
const newRegion = (name, countryID,price) => fetchAll(NEW_REGION, name, countryID,price)

module.exports = {
    categorys,
    regions,
    newRegion
}