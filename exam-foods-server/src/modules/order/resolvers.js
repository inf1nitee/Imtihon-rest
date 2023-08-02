const model = require("./model");

module.exports = {
  Query: {
    Orders: async () => {
      return await model.orders();
    },
  },
  Mutation: {
    newOrder: async (_, { order_id, name, price }) => {
      return await model.newOrder(order_id, name, price );
    }
  },
  Orders: {
    order_id: (global) => global.order_id,
    name: (global) => global.order_name,
    price: (global) => global.order_price,
  },
};
