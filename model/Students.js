const { Schema, model } = require('mongoose');
const CONFIG = require('../utils/config');
// schema
const studentsSchema = Schema({
    Organization_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.ORGANIZATION, required: true },
    FirstName: { type: String, required: true },
    LastName: { type: String, required: true },
    RollNumber:{type: Number, required: true},
    Address: { type: String, required: true },
    Gender: { type: String, enum: ["Male", "Female", "Others"], required: true },
    ContactDetails: [{ type: Number, required: true, unique: true }],
    Parent_ref: { type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.PARENTS },
    DateOfBirth:{ type: Date, required:true },
    Standard:{ type:Number, required:true},
    Section:{type:String, required:true},
    ParentName:[{type:String, required:true}],
    Subjects:[{type:String, required:true}],
    Attendance:{type:String},
    RollNumber:{type:Number},
    BloodGroup:{ type: String, required: false },
    AdmissionStatus:{type: String, enum: ["Admitted", "Pending"], required: true, default:"Pending"},
    RegisteredAt: { type: Date, default: Date.now() },
    Documents:[{type:String, required:true}],
    Role:{type: String, required: false, default:"Student"},
    SUID:{ type: String, required: true, unique: true },
    Caste:{ type: String, required: true },
    Category:{ type: String, required: true },
    HashedPassword:{ type: String, required: true },
    Siblings:[{ type: Schema.Types.ObjectId, ref: CONFIG.SCHEMAS.STUDENTS, required: false }],
    siblingDiscount: { type: Number, required: false },
    admissionFeeDetails:[{feeType:{ type: String, required: false }, feeAmount:{ type: Number, required: false }}],
    monthlyFeeDetails:[{feeType:{ type: String, required: false }, feeAmount:{ type: Number, required: false }}],
});

// model
module.exports = Student = model(CONFIG.SCHEMAS.STUDENTS, studentsSchema);
