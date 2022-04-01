const { Order } = require("../models");
const products = require("./allProducts");

module.exports = async () => {
  const orders = [
    {
      status: "PAGADO",
      address: "montevideo",
      products: [
        products[3],
        products[5],
        products[7],
      ],
      userId: 1,
    },
  ];

  await Order.bulkCreate(orders);
  console.log("[Database] Se corrió el seeder de Orders.");
};
