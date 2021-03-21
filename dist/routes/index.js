"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const routes = express_1.Router();
routes.get("/", (req, res) => {
    return res.status(200).send({ Ok: 'Bem vindo a API - Cloud Tracker' });
});
exports.default = routes;
