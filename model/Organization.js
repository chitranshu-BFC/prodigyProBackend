const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const organizationSchema = Schema({
    Name: { type: String, unique: true, required:true },
    Owner: { type: String, required: true },
    Registeration: { type: String, required: true },
    EducationBoard: { type: String, enum: ["CBSE", "Haryana", "UP", "Delhi", "Bihar"], required: true },
    Address: { type: String, required: true },
    PaymentMode: { type: String, enum: ["Cash", "UPI", "Cheque", "BankWire"], required: true },
    PaymentReceipt :[{type : String, required:true }],
    Mode:{ type: String, enum: ["Demo", "Paid"], required: true },
    RegisteredAt: { type: Date, default: Date.now() },
    Contact: [{ type: Number, required: true, unique: true }],
    UUID:{ type: String, required: false, unique: false },
    docs:[{type: String, required: false}]
});

// model
module.exports = Organization = model(CONFIG.SCHEMAS.ORGANIZATION, organizationSchema);
