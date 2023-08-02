const model = require('./model')

module.exports = {
    Query: {
        categorys: async() => {
            return await model.categorys()
        }
    },
 
    Categorys: {
        id: global => global.category_id,
        name: global => global.category_name
    }
}