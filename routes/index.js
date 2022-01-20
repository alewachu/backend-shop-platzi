const express = require('express');

const productsRoutes = require('./products.router');
const usersRoutes = require('./users.router');
const categoriesRoutes = require('./categories.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRoutes);
  router.use('/users', usersRoutes);
  router.use('/categories', categoriesRoutes);
}

module.exports = routerApi;
