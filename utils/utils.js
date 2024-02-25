// const { response } = require("express")

module.exports.sendResponse = (res, data, status, message = null) => {
    return res.status(200).send({
        status: status == true ? true : false,
        success: status == true ? 'Success': 'Failure',
        message: message,
        response: data
    })
}

module.exports.getCurrentDateTime = () => {
        let now = new Date();
        let date = now.toISOString();
        let time = now.toTimeString();
        let dateTime = date.slice(0,date.indexOf('T')) + ' ' +time.split(" ")[0];
        return dateTime;
}

module.exports.catchAsync = (fn) => {
    return (req, res, next) => {
        fn(req, res, next).catch(next);
    };  
}