// utility functions
const { success, error } = require('./response');
const { generateToken } = require('./token');
const { hashPassword, comparePassword } = require('./password');

// validation schemas
const {
  loginWithEmailSchema,
  registerWithEmailSchema,
} = require('./validationSchema');

module.exports = {
  success,
  error,
  generateToken,
  loginWithEmailSchema,
  registerWithEmailSchema,
  hashPassword,
  comparePassword,
};
