const publicRoutes = require("./publicRoutes");
const privateRoutes = require("./privateRoutes");

module.exports = (app) => {
  app.use(publicRoutes);
  app.use(privateRoutes);
};
