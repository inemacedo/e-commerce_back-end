const adminRoutes = require("./adminRoutes");
// const authRoutes = require("./authRoutes");
const productRoutes = require("./productRoutes");
// const userRoutes = require("./userRoutes");
const authRoutes = require("./authRoutes");
const userRoutes = require("./userRoutes");
const categoryRoutes = require("./categoryRoutes");

module.exports = (app) => {
  app.use(adminRoutes);
  // app.use(authRoutes);
  app.use(productRoutes);
  // app.use(userRoutes);
  app.use(authRoutes);
  app.use(userRoutes);
  app.use(categoryRoutes);
};
