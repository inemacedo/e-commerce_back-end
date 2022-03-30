const { Order } = require("../models");

module.exports = async () => {
  const orders = [
    {
      status: "PAGADO",
      address: "montevideo",
      products: [
        { id: 10, price: 890.99, quantity: 4 },
        { id: 11, price: 990.99, quantity: 4 },
      ],
      userId: 1,
    },
  ];

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
