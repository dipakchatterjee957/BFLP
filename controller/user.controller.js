const userService = require('../service/user.service');
const utils = require('../utils/utils');

module.exports = new class Usercontroller {

    // getUserList = async(req,res) =>{
    //     await userService.getUserList(req)
    //     .then((data) => {return utils.sendResponse(res,data, true) })
    //     .catch((err) => {return utils.sendResponse(res,null, false)})  
    // }
    getUserList = async (req, res) => {
        try {
            const data = await userService.getUserList(req);
            return utils.sendResponse(res, data, true);
        } catch (error) {
            console.error(error);
            return utils.sendResponse(res, null, false);
        }
    };
    

    // login = async(req,res) =>{
    //     await userService.login(req.body)
    //     .then((data) => {return utils.sendResponse(res,data, true) })
    //     .catch((err) => {return utils.sendResponse(res,null, false)})
    // }
    login = async (req, res) => {
        try {
            const data = await userService.login(req.body);
            return utils.sendResponse(res, data, true);
        } catch (error) {
            console.error(error);
            return utils.sendResponse(res, null, false,error.message);
        }
    };

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