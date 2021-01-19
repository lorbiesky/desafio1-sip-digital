const { Model, DataTypes } = require("sequelize");

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        login: DataTypes.STRING,
        password: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

module.exports = User;
