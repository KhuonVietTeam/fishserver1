'use strict'
//console.log("OKR")
const bookkeepingHandler = require('./../handler/bookkeepingHandler');
module.exports = {
    getCode: (req, res) => {
        //let {totallyProfits,thisTimeNetProfits,machineNo,enteringCodeTimes,checkCode} = req.body;
        console.log("OKE");
        // let totallyProfits = req.body.totallyProfits;
        // let thisTimeNetProfits = req.body.thisTimeNetProfits;
        // let machineNo = req.body.machineNo;
        // let enteringCodeTimes = req.body.enteringCodeTimes;
        // let checkCode = req.body.checkCode;
        
        //handle
        //let code = bookkeepingHandler.handleCode(totallyProfits,thisTimeNetProfits,machineNo,enteringCodeTimes,checkCode);

        console.log(req.body);
        //
        res.json({password:1});
    }
}
