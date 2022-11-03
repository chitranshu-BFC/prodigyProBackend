const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const scheduleSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    Teacher_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.TEACHERS, required: true },
    Schedule: [{
        Period: { type: Number, required: false },
        Subjects: [{ type: String, required: false }],
        Standard: { type: Number, required: false },
        Section: { type: String, required: false },
        freePeriod: { type: Boolean, required: false },
    }],
    sameSchedule:{ type: Boolean, required: false },
    Day: { type: String, required: false },
    RegisteredAt: { type: Date, default: Date.now() },
});

// model
module.exports = Schedule = model(CONFIG.SCHEMAS.SCHEDULE, scheduleSchema);
