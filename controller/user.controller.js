const userService = require('../service/user.service');
const utils = require('../utils/utils');

module.exports = new class Usercontroller {

    getUserList = async(req,res) =>{
        await userService.getUserList(req)
        .then((data) => {return utils.sendResponse(res,data, true) })
        .catch((err) => {return utils.sendResponse(res,null, false)})
    }

    saveOrUpdateOrDeleteUser = async(req,res) => {
        console.log(req.body)
        if(req.body.user_master_id == 0 && req.body.active_flag == 'A') {
            await userService.saveUser(req.body)
            .then((data) => {return utils.sendResponse(res,data,true)})
            .catch((err) => {return utils.sendResponse(res,null,false)})
        }else if(req.body.user_master_id != 0 && req.body.active_flag == 'A'){
            await userService.updateUser(req)
            .then((data) => {return utils.sendResponse(res,data,true)})
            .catch((err) => {return utils.sendResponse(res,null,false)})
        }else if(req.body.user_master_id != 0 && req.body.active_flag == 'D'){
            await userService.deleteUser(req)
            .then((data) => {return utils.sendResponse(res,data,true)})
            .catch((err) => {return utils.sendResponse(res,null,false)})
        }else{
            return utils.sendResponse(res,null,false);
        }
    }

}