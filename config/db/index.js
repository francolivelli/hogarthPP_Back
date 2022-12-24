const Sequelize = require("sequelize");
const db = new Sequelize("revista", "revista_user", null, {
  host: "dpg-cejco1la4991ihmh14tg-a",
  dialect: "postgres",
  logging: false,
});

module.exports = db;
