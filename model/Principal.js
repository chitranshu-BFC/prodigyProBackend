const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const principalSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    Name: { type: String, required: true },
    Address: { type: String, required: true },
    Gender: { type: String, enum: ["Male", "Female", "Others"], required: true },
    ContactDetails: [{ type: Number, required: true, unique: true }],
    registeredAt: { type: Date, default: Date.now() },
    Role:{type: String, required: false, default:"Principal"},
    HashedPassword:{ type: String, required: true },
    Documents :[{ type: String, required: false }]
});

// model
module.exports = Principal = model(CONFIG.SCHEMAS.PRINCIPAL, principalSchema);
