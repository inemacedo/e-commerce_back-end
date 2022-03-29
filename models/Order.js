module.exports = (sequelize, Model, DataTypes) => {
  class Order extends Model {}

  Order.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      status: {
        type: DataTypes.ENUM,
        values: ["OK", "ERROR", "PAID", "SENT", "CANCELLED"],
        allowNull: false,
      },
      adress: {
        type: DataTypes.STRING,
      },
      products: {
        type: DataTypes.JSON,
      },
    },
    {
      sequelize,
      modelName: "order",
    },
  );

  return Order;
};
