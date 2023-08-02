const model = require("./model");

module.exports = {
  Query: {
    Branches: async (_, { restaranID }) => {
      return await model.branches(restaranID);
    },
  },
  Mutation: {
    newBranche: async (_, { name, restaranID }) => {
      return await model.newBranche(name, restaranID);
    }
  },
  Branches: {
    id: (global) => global.branch_id,
    name: (global) => global.branch_name,
  },
};
