module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {
    validatePassword(){
      console.log("Aca se valida la password con bcrypt...");
    }
  }

  Product.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
      },
      image: {
        type: DataTypes.STRING,
      },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
      },
      stock: {
        type: DataTypes.BIGINT,
      },
      featured: {
        type: DataTypes.BOOLEAN,
      },
    },
    {
      sequelize,
      modelName: "product",
    },
  );

  return Product;
};
