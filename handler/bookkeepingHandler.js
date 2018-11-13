module.exports = {
    handleCode:async (data)=>{ // xử lý password
        //handle code
        let code =await data.totallyProfits + data.thisTimeNetProfits + data.machineNo + data.enteringCodeTimes + data.checkCode;
        
        
        //return
        return code;
    },
    getKey:async ()=>{
        let key = new Uint32Array();
        key = [2793423498,3465202843,1702134343,2234834981]
        //console.log(typeof key)
        return key;
    }
}