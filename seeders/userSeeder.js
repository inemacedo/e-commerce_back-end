const { User } = require("../models");
const users = [
  {
    firstname: "Andy",
    lastname: "Nievas",
    adress: "andy@gmail.com",
    phone: "099123123",
    email: "andy@gmail.com",
    password: "password",
  },
  {
    firstname: "Valentina",
    lastname: "Giusti",
    adress: "vale@gmail.com",
    phone: "099123123",
    email: "vale@gmail.com",
    password: "password",
  },
  {
    firstname: "Ines",
    lastname: "Macedo",
    adress: "ines@gmail.com",
    phone: "099123123",
    email: "ines@gmail.com",
    password: "password",
  }
];

module.exports = async () => {
  await User.deleteMany();

  await User.create(users);
  console.log("Se corrió el seeder de Usuarios.");
};
