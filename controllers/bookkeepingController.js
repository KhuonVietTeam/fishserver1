'use strict'
//console.log("OKR")
const bookkeepingHandler = require('./../handler/bookkeepingHandler');
module.exports = {
    getCode:async (req, res) => {
        let data = {
            totallyProfits:parseInt(req.body.totallyProfits),
            thisTimeNetProfits:parseInt(req.body.thisTimeNetProfits),
            machineNo:parseInt(req.body.machineNo),
            enteringCodeTimes:parseInt(req.body.enteringCodeTimes),
            checkCode:parseInt(req.body.checkCode)
        }
       
        
        //handle
        let code =await bookkeepingHandler.handleCode(data);


        //
        res.json({password:code});
    }
}
