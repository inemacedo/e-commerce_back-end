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
        values: ["RECIBIDO", "ERROR", "PAGADO", "ENVIADO", "CANCELADO"],
        allowNull: false,
      },
      address: {
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
