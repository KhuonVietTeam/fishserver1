module.exports = {
    handleCode:async (data)=>{ // xử lý password
        //handle code
        let code =await data.totallyProfits + data.thisTimeNetProfits + data.machineNo + data.enteringCodeTimes + data.checkCode;
        
        
        //return
        return code;
    }
}