const userQuery = require('../query/user.query');
const connection = require('../utils/mysql.controller');
const bcrypt = require("bcryptjs");
const utils = require('../utils/utils');


module.exports = new class Usercontroller {

    getUserList = async(req) =>{
        return new Promise ((resolve,reject) => {
            let queryString = userQuery.GET_USER_LIST;
            connection.query(queryString)
            .then((data) => {
                resolve(data.response)
            })
            .catch((err) => reject(err))
        })
    }

    saveUser = async(req) => {
        return new Promise ((resolve,reject) => {
            const hashsalt = bcrypt.genSaltSync(10);
            const hashedPassword = bcrypt.hashSync(req.password, hashsalt);
            let queryString = userQuery.CREATE_USER
            .replace('%branch_master_id%', req.branch_master_id)
            .replace('%user_designation_master_id%', req.user_designation_master_id)
            .replace('%user_name%', req.user_name)
            .replace('%login_id%', req.login_id)
            .replace('%password%', hashedPassword)
            .replace('%salt%', hashsalt)
            .replace('%mobile_primary%', req.mobile_primary)
            .replace('%mobile_secondary%', req.mobile_secondary)
            .replace('%email_primary%', req.email_primary)
            .replace('%email_secondary%', req.email_secondary)
            .replace('%job_status%', req.job_status)
            .replace('%active_flag%', req.active_flag)
            .replace('%created_by%', 1)
            .replace('%created_on%', utils.getCurrentDateTime())

            connection.query(queryString)
            .then((data) => {
                resolve('Create User')
            })
            .catch((err) => reject(err))
        })
    }

    updateUser = async(req) => {
        return new Promise ((resolve,reject) => {
            let queryString = userQuery.UPDATE_USER
        })
    }

    deleteUser = async(req) => {
        return new Promise ((resolve,reject) => {
            let queryString = userQuery.DELETE_USER
        })
    }


}