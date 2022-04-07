const adminRoutes = require("./adminRoutes");
const dbRoutes = require("./dataBaseRoutes");
const productRoutes = require("./productRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use(productRoutes);
  app.use(dbRoutes);
  app.use(authRoutes);
  app.use(userRoutes);
  app.use(categoryRoutes);
  app.use(orderRoutes);
  app.use(adminRoutes);
};
