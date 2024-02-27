const userQuery = require('../query/user.query');
const connection = require('../utils/mysql.controller');
const bcrypt = require("bcryptjs");
const utils = require('../utils/utils');
const jwt = require('jsonwebtoken');

module.exports = new class Usercontroller {

    // getUserList = async(req) =>{
    //     return new Promise ((resolve,reject) => {
    //         let queryString = userQuery.GET_USER_LIST;
    //         connection.query(queryString)
    //         .then((data) => {
    //             resolve(data.response)
    //         })
    //         .catch((err) => reject(err))
    //     })  
    // }

    getUserList = async (req) => {
        try {
            const queryString = userQuery.GET_USER_LIST;
            const data = await connection.query(queryString);
            return data.response;
        } catch (error) {
            throw error; // or handle the error as needed
        }
    };
    

    // login = async(req) =>{
    //     return new Promise ((resolve,reject) => {
    //         let queryString = userQuery.GET_USER
    //         .replace('%login_id%', req.login_id);
    //         connection.query(queryString)
    //         .then((data) => {
    //             console.log(data.response);
    //             this.matchPassword(req.password, data.response[0].password)
    //                 .then((res) => {
    //                     if(res){
    //                         const user = {
    //                             user_master_id: data.response[0].user_master_id,
    //                             branch_master_id: data.response[0].branch_master_id,
    //                             user_designation_master_id: data.response[0].user_designation_master_id,
    //                             user_name: data.response[0].user_name,
    //                             login_id: data.response[0].login_id,
    //                             job_status: data.response[0].job_status,
    //                             active_flag: data.response[0].active_flag,
    //                           };
    //                           const payload= {
    //                             user_master_id: data.response[0].user_master_id,
    //                             user_name: data.response[0].user_name,
    //                             login_id: data.response[0].login_id,
    //                             password: data.response[0].password,
    //                             salt: data.response[0].salt,
    //                           };
    //                             user.access_token = jwt.sign(payload, process.env.SECRET_KEY);
    //                             resolve(user);
    //                     }else{
    //                         reject('Error')
    //                     }
    //                 })
    //                 .catch((err) => reject(err))
    //         })
    //         .catch((err) => reject(err))
    //     })
    // }

    // matchPassword = async(enterdPassword,savedPassword) => {
    //     return new Promise ((resolve,reject) => {
    //         bcrypt.compare(enterdPassword,savedPassword)
    //         .then((res) => {resolve(res)})
    //         .catch((err) => reject(false));
    //     })
    // }

    login = async (req) => {
        try {
            const queryString = userQuery.GET_USER.replace('%login_id%', req.login_id);
            const data = await connection.query(queryString);
            const passwordMatch = await this.matchPassword(req.password, data.response[0].password);
    
            if (passwordMatch) {
                const user = {
                    user_master_id: data.response[0].user_master_id,
                    branch_master_id: data.response[0].branch_master_id,
                    user_designation_master_id: data.response[0].user_designation_master_id,
                    user_name: data.response[0].user_name,
                    login_id: data.response[0].login_id,
                    job_status: data.response[0].job_status,
                    active_flag: data.response[0].active_flag,
                };
                const payload = {
                    user_master_id: data.response[0].user_master_id,
                    user_name: data.response[0].user_name,
                    login_id: data.response[0].login_id,
                    password: data.response[0].password,
                    salt: data.response[0].salt,
                };
                user.access_token = jwt.sign(payload, process.env.SECRET_KEY);
                return user;
            } else {
                throw new Error('Password mismatch');
            }
        } catch (error) {
            throw new Error('Login failed');
        }
    };
    
    matchPassword = async (enteredPassword, savedPassword) => {
        try {
            return await bcrypt.compare(enteredPassword, savedPassword);
        } catch (error) {
            return false;
        }
    };
    
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
                resolve('User Created Successfully')
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