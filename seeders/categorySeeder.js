const { Category } = require("../models");

module.exports = async () => {
  const categories = [{ name: "Mesas" }, { name: "Sillas" }, { name: "Sillones" }];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Products.");
};
