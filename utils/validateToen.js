const jwt = require('jsonwebtoken');
const utils = require('./utils');

module.exports.validateToken = (req, res, next) => {
    let token =
    req.body.token ||
    req.query.token ||
    req.headers["x-access-token"] ||
    req.headers["authorization"];

    if (!token) {
        utils.sendResponse(res, null, false,'User is not otherized');
        return;
    }

    const tokenArr = token.split(" ");
    token = tokenArr.length == 2 ? tokenArr[1] : tokenArr[0];
    
    jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
            utils.sendResponse(res, null, false,'Invalid token');
          return;
        }
        req.user = decoded;
        next();
      });
    // try {
    //     const decoded = jwt.verify(token, process.env.SECRET_KEY);
    //     req.user = decoded;
    //     next();
    // } catch (error) {
    //     return utils.sendResponse(res, null, false,'Invalid token');
    // }
}