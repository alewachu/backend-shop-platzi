const express = require('express');

const productsRouter = require('./products.router');
const categoriesRouter = require('./categories.router');
const customerRouter = require('./customers.router');
const orderRouter = require('./orders.router');
const usersRouter = require('./users.router');
const authRouter = require('./auth.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/products', productsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/customer', customerRouter);
  router.use('/orders', orderRouter);
  router.use('/users', usersRouter);
  router.use('/auth', authRouter);
}

module.exports = routerApi;
