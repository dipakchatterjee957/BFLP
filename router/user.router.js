const express = require("express");
const userRouter = express.Router();
const userController = require('../controller/user.controller');
const requestValidator = require('../utils/requestValidator');
const validationSchema = require('../utils/validationSchema');
const {validateToken} = require('../utils/validateToen')
 
userRouter.post(`/getUserList`,validateToken, userController.getUserList);
userRouter.post(`/login`, requestValidator(validationSchema.loginSchema), userController.login);
userRouter.post(`/saveOrUpdateOrDeleteUser`, requestValidator(validationSchema.createUserSchema),userController.saveOrUpdateOrDeleteUser);


module.exports = userRouter