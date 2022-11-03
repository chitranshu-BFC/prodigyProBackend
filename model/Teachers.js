const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');

// schema
const teacherSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    FatherName: { type: String, required: false },
    SpouseName: { type: String, required: false },
    Email: { type: String, required: false, unique: true },
    Address: { type: String, required: true },
    Gender: { type: String, enum: ["Male", "Female", "Others"], required: true },
    ContactDetails: [{ type: Number, required: true, unique: true }],
    Subjects:[{ type: String, required: false }],
    ClassIncharge:{ type: Number, required: false },
    Section:[{type: String, required: false}],
    RegisteredAt: { type: Date, default: Date.now() },
    Role:{type: String, required: false, default:"Teacher"},
    Documents:[{type:String, required:true}],
    HashedPassword:{ type: String, required: true }
});
 
// model
module.exports = Teacher = model(CONFIG.SCHEMAS.TEACHERSALIAS, teacherSchema);
