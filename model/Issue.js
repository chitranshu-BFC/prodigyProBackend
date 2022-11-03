const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const issueSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    Teacher_refs: [{ type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.TEACHERS, required: false }],
    Principal_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.PRINCIPAL, required: false },
    Students_ref: [{ type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.STUDENTS, required: false }],
    Issue_details:{type: String, required: true},
    raisedOn: { type: Date, default: Date.now() },
    Status:{type:String, enum:['active','resolved','pending'], default:'active'}
});

// model
module.exports = Issue = model(CONFIG.SCHEMAS.ISSUE, issueSchema);
