const userRoutes = require("./userRoutes");
const adminRoutes = require("./adminRoutes");
const productRoutes = require("./productRoutes");

module.exports = (app) => {
  app.use(userRoutes);
  app.use(adminRoutes);
  app.use(productRoutes);
};
