const Joi = require('joi');

const email = Joi.string().email({ tlds: { allow: true } }).required();
const password = Joi.string().min(1).max(20).required();

const login = Joi.object({
  email,
  password,
});

module.exports = { login };
