const mysql = require('mysql2');
const database = require('./database') ;
// const { connect } = require('../router/user.router');


exports.query = (queryText) => {
    return new Promise((resolve, reject) => {
        let connection = mysql.createConnection(database);
        try {
            connection.connect((err) => {
                if(err) throw err;
    
                connection.query(queryText, (err,res, field) => {
                    if (err) {
                        console.error(err);
                        throw err;
                    }
                    if (err) { connection.end(); reject({ error: err, response: null, fields: null }) }
                    else { connection.end(); resolve({ error: err, response: res, fields: field }) }
                })
            })
        }catch (err){
            reject({ error: err, response: null, fields: null })
        }
    })
    
}