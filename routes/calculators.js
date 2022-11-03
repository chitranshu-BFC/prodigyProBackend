const router = require('express').Router();


//routes
const CONFIG = require("../utils/config");
const {
    SIPROUTE,
    ELSSROUTE,
    EMIROUTE
} = CONFIG.ROUTES

//controllers
const {
    SipCalculator,
    ELSSCalculator,
    EMICalculator,
    LumpSumCalculator,
    FDCalculator
} = require('../controller/calculators');

//token verify middleware
const { verifyToken } = require('../middleware/token');

//SIP Route
router.post(SIPROUTE, SipCalculator);

//ELSS ROUTE
router.post(ELSSROUTE, ELSSCalculator);

//EMI ROUTE
router.post(EMIROUTE, EMICalculator);

//LUMPSUM ROUTE
router.post(EMIROUTE, LumpSumCalculator);

//FD ROUTE
router.post(EMIROUTE, FDCalculator);


module.exports = router;
