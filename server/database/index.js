import { connection } from "mongoose";
import Sequelize from "sequelize";
import config from "../config/database";
import User from "../models/User";

const sequelize = new Sequelize(config);

User.init(sequelize);

module.exports = {
  sequelize,
};
