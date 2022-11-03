const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const feeSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    Standard: { type: Number, required: false },
    Section: {type: String, required: false},
    SameFee :{type:Boolean, required:false, default:false},
    FeeType:[{
        feeName: { type: String, required: false },
        feeAmount: { type: Number, required: false },
    }],
});

// model
module.exports = feeStructure = model(CONFIG.SCHEMAS.FEE_STRUCTURE, feeSchema);
