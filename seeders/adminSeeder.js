const { Admin } = require("../models");
const adminSupremo = [{
    firstname: "Admin",
    lastname: "HackHome",
    email: "admin@hackhome.com",
    password: "admin1234",
  }];

module.exports = async () => {
  await Admin.bulkCreate(adminSupremo);
  console.log("[Database] Se corrió el seeder de Admin.");
};
