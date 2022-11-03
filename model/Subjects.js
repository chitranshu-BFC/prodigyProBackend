const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const subjectSchema = Schema({
    Subjects: [{ type: String, required: true }],
    Standard: { type: Number, required: true },
    Section: [{ type: String, required: false }],
    RegisteredAt: { type: Date, default: Date.now() },
    Sections: [{ type: String, required: false, unique: true }]
});

// model
module.exports = Subjects = model(CONFIG.SCHEMAS.SUBJECTS, subjectSchema);
