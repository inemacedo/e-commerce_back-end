const { User } = require("../models");
const users = [
  {
    firstname: "Andy",
    lastname: "Nievas",
    address: "Montevideo",
    phone: "099123123",
    email: "andy@gmail.com",
    password: "password",
  },
  {
    firstname: "Valentina",
    lastname: "Giusti",
    address: "Montevideo",
    phone: "099123123",
    email: "vale@gmail.com",
    password: "password",
  },
  {
    firstname: "Ines",
    lastname: "Macedo",
    address: "Montevideo",
    phone: "099123123",
    email: "ines@gmail.com",
    password: "password",
  },
];

module.exports = async () => {
  await User.bulkCreate(users);
  console.log("[Database] Se corrió el seeder de Usuarios.");
};
