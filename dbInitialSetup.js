const db = require("./models");

module.exports = async () => {
  // Crear tablas:
  await db.sequelize.sync({ force: true });
  console.log("[Database] ¡Las tablas fueron creadas!");

  // Ejecutar seeders (datos de prueba):
  await require("./seeders/categorySeeder")();
  await require("./seeders/productSeeder")();
  await require("./seeders/userSeeder")();
  await require("./seeders/adminSeeder")();
  console.log("[Database] ¡Los datos de prueba fueron insertados!");
};
