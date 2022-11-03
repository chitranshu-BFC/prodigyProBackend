const logger = require('../utils/logger')(__filename);
const Organization = require('../model/Organization');
const CONFIG = require('../utils/config');

const uuid = require('../utils/uuid')

module.exports = {
    async addOrganization(req, res) {
        logger.debug('controller>organization>addOrganization')
        try {
            if (req.body == null || req.body == undefined) {
                return res.status(400).send({ success: false, msg: "Empty params" })
            }

            const { Name, Owner, Address, Contact, Mode, PaymentMode, Registeration, EducationBoard } = req.body;

            let UUID = await uuid.getFirstLetters(Name) + await Organization.estimatedDocumentCount() + 1;

            let organization = await Organization.create({ Name, Owner, Address, Contact, Mode, PaymentMode, Registeration, EducationBoard, UUID });

            if (!organization || organization == null || organization == undefined) {
                return res.status(500).send({ success: false, msg: "some error occured, could not create record" })
            }

            return res.status(200).send({ success: true, msg: "Created successfully", data: organization })
        } catch (error) {
            // console.log("error from addOrganization ", error)
            return res.status(500).send({ success: false, msg: "some error occured", error })
        }
    },

    async findOrganization(req, res) {
        logger.debug('controller>organization>findOrganization')
        try {
            if (req.body == null || req.body == undefined || req.query.nPerPage > 50) {
                return res.status(400).send({ success: false, msg: "Empty or Invalid params" })
            }

            let pageNumber = parseInt(req.query.pageNumber);
            let nPerPage = parseInt(req.query.nPerPage);

            let organization = await Organization.find(req.body).skip(pageNumber > 0 ? (pageNumber - 1) * nPerPage : 0).limit(nPerPage ? nPerPage : 100);

            if (organization.length < 1) {
                return res.status(400).send({ success: false, msg: "Sorry could not find requested record" })
            }

            return res.status(200).send({ success: true, msg: "data fetched successfully", data: organization })
        } catch (error) {
            console.log("error from findOrganization ", error)
            return res.status(500).send({ success: false, msg: "some error occured", error })
        }
    },
}