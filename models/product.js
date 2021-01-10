"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      product.belongsTo(models.category);
      product.belongsToMany(models.order, {
        through: "orderProducts",
        foreignKey: "productId",
      });
    }
  }
  product.init(
    {
      name: DataTypes.STRING,
      categoryId: DataTypes.INTEGER,
      imageUrl: DataTypes.STRING,
      description: DataTypes.TEXT,
      price: DataTypes.FLOAT
    },
    {
      sequelize,
      modelName: "product",
    }
  );
  return product;
};
