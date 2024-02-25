const express = require("express");
const userRouter = express.Router();
const userController = require('../controller/user.controller');
const requestValidator = require('../utils/requestValidator');
const validationSchema = require('../utils/validationSchema')
 
userRouter.post(`/getUserList`, userController.getUserList);
userRouter.post(`/saveOrUpdateOrDeleteUser`, 
    requestValidator(validationSchema.createUserSchema),
    userController.saveOrUpdateOrDeleteUser
    );


module.exports = userRouter