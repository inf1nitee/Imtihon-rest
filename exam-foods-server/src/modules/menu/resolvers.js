const model = require("./model");

module.exports = {
  Query: {
    Menus: async (_, { branchID }) => {
      return await model.menus(branchID);
    },
    allMenu: async() => {
      return await model.allMenu()
    }
  },
  Mutation: {
    newMenu: async (_, { name, price, branchID }) => {
      return await model.newMenu(name,price, branchID);
    }
  },
  Menus: {
    id: (global) => global.menu_id,
    name: (global) => global.menu_name,
    price: (global) => global.menu_price,
  },
};
