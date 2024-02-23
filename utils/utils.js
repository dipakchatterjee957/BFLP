// const { response } = require("express")

module.exports.sendResponse = (res, data, status, message = null) => {
    return res.status(200).send({
        status: status == true ? true : false,
        success: status == true ? 'Success': 'Failure',
        message: message,
        response: data
    })
}