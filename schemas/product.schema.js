const Joi = require('joi');
const id = Joi.string().uuid();
const title = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.object({
  title: title.required(),
  price: price.required(),
});

const updateProductSchema = Joi.object({
  title,
  price,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
