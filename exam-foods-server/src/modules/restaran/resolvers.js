const model = require("./model");

module.exports = {
  Query: {
    Restarans: async (_, { categoryID }) => {
      return await model.restarans(categoryID);
    },
  },
  Mutation: {
    newRestaran: async (_, { name, categoryID }) => {
      return await model.newRestaran(name, categoryID);
    }
  },
  Restarans: {
    id: (global) => global.restaran_id,
    name: (global) => global.restaran_name,
  },
};
