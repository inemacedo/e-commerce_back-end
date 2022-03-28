const bcryptjs = require("bcryptjs");
const saltRounds = 8;

module.exports = (sequelize, Model, DataTypes) => {
  class User extends Model {
    async checkUser(password) {
      const match = await bcryptjs.compare(password, this.password);
      return match;
    }
  }

  User.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        //allowNull: false,
        unique: true,
      },
      password: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      adress: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      phone: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "user",
    },
  );
  User.beforeBulkCreate(async (users, options) => {
    for (const user of users) {
      const hashedPassword = await bcryptjs.hash(user.password, saltRounds);
      user.password = hashedPassword;
    }
  });

  User.beforeCreate(async (user, options) => {
    const hashedPassword = await bcryptjs.hash(user.password, saltRounds);
    user.password = hashedPassword;
  });

  return User;
};
