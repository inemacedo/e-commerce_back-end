const bcryptjs = require("bcryptjs");
const saltRounds = 8;

module.exports = (sequelize, Model, DataTypes) => {
  class Admin extends Model {
    async checkAdminPassword(password) {
      const match = await bcryptjs.compare(password, this.password);
      return match;
    }
  }

  Admin.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      firstname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
      },
      token: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "admin",
      hooks: {
        beforeUpdate: async (admin, options) => {
          const hashedPassword = await bcryptjs.hash(admin.password, saltRounds);
          admin.password = hashedPassword;
        }
      }
    },
  );

  Admin.beforeBulkCreate(async (admins, options) => {
    for (const admin of admins) {
      const hashedPassword = await bcryptjs.hash(admin.password, saltRounds);
      admin.password = hashedPassword;
    }
  });

  Admin.beforeCreate(async (admin, options) => {
    const hashedPassword = await bcryptjs.hash(admin.password, saltRounds);
    admin.password = hashedPassword;
  });

  return Admin;
};
