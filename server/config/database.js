const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  host: "localhost",
  dialect: "mysql",
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  define: {
    timestamps: true,
    underscored: true,
  },
  logging: false,
};
