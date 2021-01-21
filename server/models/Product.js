const { Model, DataTypes } = require("sequelize");

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: DataTypes.STRING,
        price: DataTypes.STRING,
        image_path: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

module.exports = Product;
