const adminRoutes = require("./adminRoutes");
// const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");
// const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");
const orderRoutes = require("./orderRoutes");

module.exports = (app) => {
  app.use(productRoutes);
  app.use(authRoutes);
  app.use(userRoutes);
  app.use(categoryRoutes);
  app.use(orderRoutes);
  app.use(adminRoutes);
};
