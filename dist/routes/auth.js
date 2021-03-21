"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Login_1 = require("../useCases/Auth/Login");
const LoginRecover_1 = require("../useCases/Auth/LoginRecover");
const UnlockLogin_1 = require("../useCases/Auth/UnlockLogin");
const UpdatePassword_1 = require("../useCases/Auth/UpdatePassword");
const routes = express_1.Router();
routes.get("/", (req, res) => {
    return res.status(200).send({ Ok: 'API - Cloud Tracker / authenication...' });
});
routes.get("/:email/:type", (req, res) => {
    return LoginRecover_1.loginRecoverController.handler(req, res);
});
routes.post("/", (req, res) => {
    return Login_1.loginController.handle(req, res);
});
routes.put("/active", (req, res) => {
    return UnlockLogin_1.unloackLoginController.handler(req, res);
});
routes.put("/updatepassword", (req, res) => {
    return UpdatePassword_1.updatePassorwdController.handler(req, res);
});
exports.default = routes;
