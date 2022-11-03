const router = require('express').Router();
//routes
const CONFIG = require("../utils/config");
const {
    UPLOAD_FILES,
} = CONFIG.ROUTES

//controllers
// const{
//     uploadFiles
// }=require('../controller/fileUpload');

//token verify middleware
const { verifyToken } = require('../middleware/token');

//File Upload
// router.post(UPLOAD_FILES, uploadFiles);


module.exports = router;
