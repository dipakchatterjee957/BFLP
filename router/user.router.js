const express = require("express");
const userRouter = express.Router();
const userController = require('../controller/user.controller');

userRouter.get(`/getUserList`, userController.getUserList)

module.exports = userRouter