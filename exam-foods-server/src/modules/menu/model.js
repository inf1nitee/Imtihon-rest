const { fetch, fetchAll } = require('../../lib/postgres')


const MENUS = `
    SELECT
        *
    FROM
      menus
    WHERE
        branch = $1
`
const ALL_MENUS = `
    SELECT
        *
    FROM
      menus
`

const NEW_MENU = `
    INSERT INTO menus(
        menu_name,
        menu_price,
        branch
    )
    VALUES($1, $2, $3)
    RETURNING *
`


const allMenu = ()=> fetchAll(ALL_MENUS)
const menus = (id) => fetchAll(MENUS, id)
const newMenu = (name,price, branchID) => fetchAll(NEW_MENU, name, price, branchID)

module.exports = {
    allMenu,
    menus,
    newMenu
}