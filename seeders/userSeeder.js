const { faker } = require("@faker-js/faker");
const { User } = require("../models");
const imageNames = ["img1.png", "img2.png", "img3.png"];
const us = [
  ["Andy", "Nievas", "nievasandy73@gmail.com"],
  ["Fabricio", "Guido", "fbrcgd@gmail.com"],
  ["Fernando", "Marco", "fn.marcoarias@gmail.com"],
];
const numberOfUsers = 10;
const averageFollowsPerUser = 5;
faker.locale = "es";

module.exports = async () => {
  await User.deleteMany();
  const users = [];
  for (const person of us) {
    const firstname = person[0];
    const lastname = person[1];
    const user = new User({
      username: firstname,
      firstname,
      lastname,
      email: person[2],
      bio: faker.lorem.sentences( 1 ),
      image: imageNames[Math.floor(Math.random() * imageNames.length)],
      tweets: [],
      following: [],
      followers: [],
      password: "password",
    });
    users.push(user);
  }
  for (let i = 0; i < numberOfUsers - 3; i++) {
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const username = faker.internet.userName(firstname, lastname) + i;
    const user = new User({
      username,
      firstname,
      lastname,
      email: faker.internet.email(username),
      bio: faker.lorem.sentences(),
      image: imageNames[Math.floor(Math.random() * imageNames.length)],
      tweets: [],
      following: [],
      followers: [],
      password: faker.internet.password(10, true),
    });
    users.push(user);
  }
  const indexes = [];
  while (indexes.length < numberOfUsers * averageFollowsPerUser) {
    let index = Math.floor(Math.random() * (numberOfUsers ** 2));
    if (index % (numberOfUsers + 1) !== 0 && !indexes.includes(index)) {
      indexes.push(index);
    }
  }
  for (const index of indexes) {
    const indexA = index % numberOfUsers;
    const indexB = Math.floor(index / numberOfUsers);
    users[indexA].following.push(users[indexB].id);
    users[indexB].followers.push(users[indexA].id);
  }

  await User.create(users);
  console.log("Se corrió el seeder de Usuarios.");
};
