const userQuery = require('../query/user.query');
const connection = require('../utils/mysql.controller')
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
            let queryString = userQuery.CREATE_USER
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