const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const parentsSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: false },
    Name: [{ type: String, unique: false, required: true }],
    Address: { type: String, required: true },
    ContactDetails: [{ type: Number, required: true, unique: true }],
    PaymentMode: { type: String, enum: ["NEFT", "UPI", "Cash", "Others"], required: false },
    PaymentReceipt: [{ type: String, required: false }],
    registeredAt: { type: Date, default: Date.now() },
    StudentRelation:{ type: String, required: false },
    Role:{type: String, required: false, default:"Parent"}
});

// model
module.exports = Parents = model(CONFIG.SCHEMAS.PARENTS, parentsSchema);
