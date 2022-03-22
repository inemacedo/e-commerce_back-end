//const db = require("./models");
const mongoose = require("mongoose");

mongoose.connection
  .once("open", () => console.log("¡Conexión con la base de datos establecida!"))
  .on("error", (error) => console.log(error));

module.exports = async () => {
  await mongoose.connect(process.env.DB_CONNECTION);

  if(process.env.SEEDERS === "true"){
    await require("./seeders/userSeeder")();
    await require("./seeders/tweetSeeder")();
    console.log("[Database] ¡Los datos de prueba fueron insertados!");
  }

};
