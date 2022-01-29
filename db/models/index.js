const { Category, CategorySchema } = require('./category.model');
const { Customer, CustomerSchema } = require('./customer.model');
const { Product, ProductSchema } = require('./product.model');
const { Order, OrderSchema } = require('./order.model');
const { OrderProduct, OrderProductSchema } = require('./order-product.model');
const { User, UserSchema } = require('./user.model');

function setupModels(sequelize) {
  Category.init(CategorySchema, Category.config(sequelize));
  Customer.init(CustomerSchema, Customer.config(sequelize));
  Product.init(ProductSchema, Product.config(sequelize));
  Order.init(OrderSchema, Order.config(sequelize));
  OrderProduct.init(OrderProductSchema, OrderProduct.config(sequelize));
  User.init(UserSchema, User.config(sequelize));

  Category.associate(sequelize.models);
  Customer.associate(sequelize.models);
  Product.associate(sequelize.models);
  Order.associate(sequelize.models);
  User.associate(sequelize.models);
}

module.exports = setupModels;
