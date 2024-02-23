const express = require("express");
const userRouter = express.Router();
const userController = require('../controller/user.controller');

// const userPath = '/user';

userRouter.get(`/getUserList`, userController.getUserList)

module.exports = userRouter