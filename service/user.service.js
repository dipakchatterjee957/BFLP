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

}