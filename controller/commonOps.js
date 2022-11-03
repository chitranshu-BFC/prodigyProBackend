const logger = require('../utils/logger')(__filename);
const Students = require('../model/Students');
const Teachers = require('../model/Teachers');
const Parents = require('../model/Parents');
const Principal = require('../model/Principal');
const Organization = require('../model/Organization');
const Config = require('../utils/config')

const response = require('../utils/response');
const { hashPassword, comparePassword } = require('../utils/password');


module.exports = {
    async resetPassword(req, res) {
        logger.debug('controller>commonOps>resetPassword')
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty params" })
            }

            const { Role, userId, password, updatePassword } = req.body;

            switch (Role) {
                case "Student":
                    let Studentdata = await Students.findOne({ SUID: userId })
                    if (!Studentdata || Studentdata == undefined) {
                        return response.error(res, 400, { error: "Invalid user/password" })
                    }

                    let verified = await comparePassword(password, Studentdata.HashedPassword);
                    if (!verified) {
                        return response.error(res, 400, { msg: "Invalid userId/password" });
                    }
                    let HashedPassword = await hashPassword(updatePassword);

                    let updatedData = await Students.findOneAndUpdate({ SUID: userId }, {HashedPassword:HashedPassword})

                    if (!updatedData || updatedData == undefined) {
                        return response.error(res, 500, { error: "SomeError Occured, password could not be updated" })
                    }

                    return response.success(res, 200, { msg: "Password updated successfully" })
                    break;
                case "Teacher":
                    let TeacherData = await Teachers.findOne({ ContactDetails: userId })
                    if (!TeacherData || TeacherData == undefined) {
                        return response.error(res, 400, { error: "Invalid user/password" })
                    }

                    let verifiedTeacherPass = await comparePassword(password, TeacherData.HashedPassword);

                    if (!verifiedTeacherPass) {
                        return response.error(res, 400, { msg: "Invalid userId/password" });
                    }
                    let HashedPasswordTeacher = await hashPassword(updatePassword);

                    let updatedDataTeacher = await Teachers.findOneAndUpdate({ ContactDetails: userId }, {HashedPassword:HashedPasswordTeacher})

                    if (!updatedDataTeacher || updatedDataTeacher == undefined) {
                        return response.error(res, 500, { error: "SomeError Occured, password could not be updated" })
                    }

                    return response.success(res, 200, { msg: "Password updated successfully" })
                    break;
                default:
                    return response.error(res, 400, { error: "Invalid Type" })
            }
        } catch (error) {
            return response.error(res, 500, error);
        }
    },
}