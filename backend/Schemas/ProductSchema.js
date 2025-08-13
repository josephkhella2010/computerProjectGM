const { Sequelize, DataTypes } = require("sequelize");

// Initialize SQLite connection
const sequelize = new Sequelize({
  dialect: "sqlite",
  storage: "./database.sqlite",
  logging: false,
});

// Define Product model
const Product = sequelize.define(
  "Product",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    imgs: {
      type: DataTypes.TEXT, // store JSON string
      get() {
        const rawValue = this.getDataValue("imgs");
        return rawValue ? JSON.parse(rawValue) : [];
      },
      set(value) {
        this.setDataValue("imgs", JSON.stringify(value));
      },
    },
  },
  {
    timestamps: true,
  }
);

// Sync table on startup
sequelize.sync({ alter: true });

module.exports = Product;
