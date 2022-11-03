const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const attendanceSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    Role: { type: String, required: true },
    Leave: { type: Boolean, required: false },
    LeaveReason:{ type: String, required: false },
    Standard: { type: String, required: false },
    Section: { type: String, required: false },
    AttendeeId: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.STUDENTS, required: false },
    AttenderId: { type: String, required: false },
    Holiday: { type: Boolean, required: false },
    Date: { type: Date, required: true }
});

// model
module.exports = Attendance = model(CONFIG.SCHEMAS.ATTENDANCE, attendanceSchema);
