const { number } = require('joi');
const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const eventSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    EventName: { type: String, required: true },
    EventType: { type: String, required: true },
    Standard: { type: Number, require: false },
    Section: { type: String, require: false },
    allClassAllowed: { type: Boolean, require: false, default:false },
    // Coordinator: [{ type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.TEACHERS || CONFIG.SCHEMAS.STUDENTS, required: true }],
    EventDate: { type: Date, required: true },
    EventUrl: { type: Date, required: false },
    EventDescription: { type: String, required: true },
    Participants: [{ type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.TEACHERS || CONFIG.SCHEMAS.STUDENTS, required: false }],
    ParticipantsAllowrd: { type: Boolean, required: false, default: false }
});

// model
module.exports = Events = model(CONFIG.SCHEMAS.EVENTS, eventSchema);
