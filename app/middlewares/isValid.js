const Joi = require('joi');

const isValid = function (schema, provider = 'body') {
  return function (req, res, next) {
    const { error } = schema.validate(req[provider]);

    if (error) {
      res.status(401).json({ error });
    } else {
      next();
    }
  };
};

module.exports = isValid;
