const router = require('express').Router();
//routes
const CONFIG = require("../utils/config");
const{
    REGISTER_WITH_EMAIL,
    USER,
    LOGIN_WITH_EMAIL,
    RESET_PASSWORD
}=CONFIG.ROUTES

// controller
const authController = require('../controller/auth');
// reset-password controller
const commonOps = require('../controller/commonOps');

// middleware
const { verifyToken } = require('../middleware/token');

// routes
// @type   POST /api/auth/login-with-email
// @access Public
// @desc   Login with email route
router.post(LOGIN_WITH_EMAIL, authController.loginWithEmail);
// @type   POST /api/auth/register-with-email
// @access Public
// @desc   Register with email route
router.post(REGISTER_WITH_EMAIL, authController.registerWithEmail);
// @type   POST /api/auth/user
// @access Protected
// @desc   Get user info
router.get(USER,verifyToken, authController.getUser);

//reset-password
router.post(RESET_PASSWORD, commonOps.resetPassword);

module.exports = router;
