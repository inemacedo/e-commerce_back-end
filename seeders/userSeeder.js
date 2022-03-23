const { User } = require("../models");
const us = [
  ["Andy", "Nievas", "nievasandy73@gmail.com"],
  ["Fabricio", "Guido", "fbrcgd@gmail.com"],
  ["Fernando", "Marco", "fn.marcoarias@gmail.com"],
];

module.exports = async () => {
  await User.deleteMany();
  const users = [];
  for (const person of us) {
    const firstname = person[0];
    const lastname = person[1];
    const user = new User({
      firstname: firstname,
      lastname: lastname,
      adress: adress,
      phone: phone,
      email: person[2],
      password: "password",
    });
    users.push(user);
  }

  await User.create(users);
  console.log("Se corrió el seeder de Usuarios.");
};
