const { string } = require('joi');
const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const examSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    Teacher_refs: [{ type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.TEACHERSALIAS, required: false }],
    Principal_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.PRINCIPAL, required: false },
    Coordinator_refs: [{ type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.TEACHERSALIAS, required: false }],
    ExamName: { type: String, required: true },
    Duration:{type:Number, require:false},
    examDetails:[{
        subject:{ type: String, required: false },
        time:{type: String, required: false},
        date:{type: Date, required: false}
    }],
    CreatedOn: { type: Date, default: Date.now() },
});

// model
module.exports = Exam = model(CONFIG.SCHEMAS.EXAM, examSchema);
