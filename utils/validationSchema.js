const Joi = require('joi');

// validation schemas
const registerWithEmailSchema = Joi.object({
  firstName: Joi.string().min(3).required(),
  lastName: Joi.string().min(3).required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});

const loginWithEmailSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(8).required(),
});


module.exports = {
    registerWithEmailSchema,
    loginWithEmailSchema
}