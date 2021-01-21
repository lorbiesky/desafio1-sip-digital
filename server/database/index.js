import { connection } from "mongoose";
import Sequelize from "sequelize";
import config from "../config/database";
import User from "../models/User";
import Product from "../models/Product";

const sequelize = new Sequelize(config);

User.init(sequelize);
Product.init(sequelize);

module.exports = {
  sequelize,
};
