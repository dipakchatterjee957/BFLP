const userService = require('../service/user.service')
const utils = require('../utils/utils')

module.exports = new class Usercontroller {

    getUserList = async(req,res) =>{
        await userService.getUserList(req)
        .then((data) => {return utils.sendResponse(res,data, true) })
        .catch((err) => {
            return utils.sendResponse(res,null, false)
        })
    }

}