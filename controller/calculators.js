const { log } = require("winston");
const getMachine = require('../utils/fdCalculator').getMachine;
const response = require('../utils/response');
const axios = require('axios');

module.exports = {
    //SIP calculator
    async SipCalculator(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const { monthlySavings, investmentPeriod, expectedRateReturn } = req.body;

            var monthlyRate = expectedRateReturn / 12 / 100;
            var months = investmentPeriod * 12;
            var futureValue = 0;
            var futureValue = (monthlySavings * (1 + monthlyRate) * ((Math.pow((1 + monthlyRate), months)) - 1) / monthlyRate);

            var mainresults = futureValue.toFixed(2)
            var totalSaving = monthlySavings * months
            var gains = (mainresults - monthlySavings * months).toFixed(2)
            var totalMonth = investmentPeriod
            var a = parseInt(totalSaving)
            var g = parseInt(gains)
            var gainss = a + g
            // console.log("aaaaaaaaaas", a + g);
            const data = {
                totalSaving,
                gainss,
                mainresults,
                investmentPeriod,
                totalMonth

            };

            return res.status(200).json({ msg: "Calculated successfully", totalSaving: getMachine(Math.round(totalSaving)), gainss: getMachine(Math.round(gainss)), mainresults: getMachine(Math.round(mainresults)), totalMonth: getMachine(Math.round(totalMonth)) });
        } catch (error) {
            console.log("error from SipCalculator ", error);
            return response.error(res, 500, error);
        }
    },

    //LUMPSUM calculator
    async LumpSumCalculator(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const { investment, period, returnValue } = req.body;

            var i = (returnValue / 100) / 12;

            var lumpsums = investment * Math.pow((1 + returnValue / 100), period);
            var lumpsum = parseInt(lumpsums).toFixed(2)
            // var lumpsum = parseInt(lumpsums)
            console.log("lumpsum", lumpsum)
            var gains = lumpsum - investment

            const data = {
                investment,
                period,
                lumpsum,
                gains
            };
            res.status(200).json({
                msg: "Calculated Succesfully",
                data: data
            });

            return res.status(200).json({ msg: "Calculated successfully", totalSaving: getMachine(Math.round(totalSaving)), gainss: getMachine(Math.round(gainss)), mainresults: getMachine(Math.round(mainresults)), totalMonth: getMachine(Math.round(totalMonth)) });
        } catch (error) {
            console.log("error from LumpSumCalculator ", error);
            return response.error(res, 500, error);
        }
    },

    //FD calculator
    async FDCalculator(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const { investAmount, investmentDuration, intrestRate, compoundingPeriod } = req.body;

            var p = investAmount;
            var t = investmentDuration;
            var r = intrestRate;
            var n = compoundingPeriod;
            var pric = p;
            var amt = ""; var inest = "";
            for (var i = 1; i <= t; i++) {
                // var str1 = "<tr><td>" + i + "</td><td>" + pric + "</td>";
                var val1 = 1 + r / (100 * n);
                var val2 = (1 * n / 1);
                amt = pric * Math.pow(val1, val2);
                inest = amt - pric;
                pric = amt.toFixed(0);
                // var str2 = "<td>" + inest.toFixed(0) + "</td><td>" + amt.toFixed(0) + "</td></tr>";
                // var res = str1.concat(str2);
                // $('#tbody').append(res);
            }
            // console.log("amt", amt);

            return res.status(200).json({
                msg: "Calculated Succesfully",
                data: getMachine(Math.round(amt))
            });

        } catch (error) {
            console.log("error from FDCalculator ", error);
            return response.error(res, 500, error);
        }
    },

    //EMI calculator
    async EMICalculator(req, res) {
        try {

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            const { loanAmount, rateIntrest, tanureYear } = req.body;

            // console.log("reqqqs", req.body);
            axios.post('https://mfapi.advisorkhoj.com/calc/getEMICalcResult?loan_amount=' + loanAmount + '&interest_rate=' + rateIntrest + '&loan_tenure_type=month&loan_tenure=' + (tanureYear * 12) + '&key=3cd5b774-7cf6-4d0d-8bab-967f8a56797d').then((result) => {

                // console.log(result.data);
                return res.json({ status: 200, data: result.data });
            }).catch(err => {
                console.log("error from  emi calculator ", err);
                return response.error(res, 500, err);
            })

        } catch (error) {
            console.log("error from emi Calculator ", error);
            return response.error(res, 500, error);
        }
    },

    //ELSS calculator
    async ELSSCalculator(req, res) {
        try {
            const { investment, period } = req.body;

            // console.log("ELSSCalculator req body ", req, "period ", period)

            if (req.body == null || req.body == undefined) {
                return response.error(res, 400, { msg: "Empty body" })
            }

            if (investment > 150000) {
                var taxInvestment = 150000;
            } else {
                var taxInvestment = investment;
            }
            var taxValue = (parseFloat(taxInvestment) * parseFloat(period)) / 100;
            var taxValuePercent = (parseFloat(taxValue) * 4) / 100;
            var finalValue = taxValue + taxValuePercent;

            // console.log("finalValue", finalValue);

            return res.status(200).json({
                msg: "Calculated Succesfully",
                data: getMachine(Math.round(finalValue))
            });

        } catch (error) {
            console.log("error from elss Calculator ", error);
            return response.error(res, 500, error);
        }
    },
}