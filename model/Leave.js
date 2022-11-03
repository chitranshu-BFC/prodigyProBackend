const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const leaveSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    RequesteeId: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.STUDENTS, required: false },
    LeaveDescription: { type: Boolean, required: false },
    Standard: { type: String, required: false },
    Section: { type: String, required: false },
    StartDate: { type: Date, required: true },
    EndDate: { type: Date, required: true },
    Role: { type: String, required: true },
    Status: { type: String, required: true, default: 'Pending' }
});

// model
module.exports = Leave = model(CONFIG.SCHEMAS.LEAVE, leaveSchema);
