module.exports = (sequelize, Model, DataTypes) => {
  class Product extends Model {
    validatePassword() {
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
        type: DataTypes.STRING(512),
      },
      image: {
        type: DataTypes.STRING(512),
      },
      imageenvironment: {
        type: DataTypes.STRING(512),
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
      measures: {
        type: DataTypes.STRING,
      },
      style: {
        type: DataTypes.STRING,
      },
      material: {
        type: DataTypes.STRING,
      },
      environment: {
        type: DataTypes.STRING,
      },
      slug: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "product",
    },
  );

  return Product;
};
