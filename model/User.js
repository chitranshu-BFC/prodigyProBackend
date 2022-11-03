const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const userSchema = Schema({
  userEmail: { type: String, unique: true },
  password: {type: String},
  registeredAt: { type: Date, default: Date.now() },
});

// model
module.exports = User = model(CONFIG.SCHEMAS.USER, userSchema);
