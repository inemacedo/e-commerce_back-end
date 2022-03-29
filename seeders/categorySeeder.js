const { Category } = require("../models");

module.exports = async () => {
  const categories = [{ name: "mesas" }, { name: "sillas" }, { name: "sillones" }];

  await Category.bulkCreate(categories);
  console.log("[Database] Se corrió el seeder de Products.");
};
