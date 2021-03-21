"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Create_1 = require("../useCases/Users/Create");
const Update_1 = require("../useCases/Users/Update");
const ShowAll_1 = require("../useCases/Users/ShowAll");
const Search_1 = require("../useCases/Users/Search");
const routes = express_1.Router();
routes.get("/", (req, res) => {
    return ShowAll_1.showUserController.handler(req, res);
});
routes.post("/", (req, res) => {
    return Create_1.createUserController.handle(req, res);
});
routes.get("/:descript", (req, res) => {
    return Search_1.searchUserController.handler(req, res);
});
routes.put('/', (req, res) => {
    return Update_1.updateUserController.handler(req, res);
});
exports.default = routes;
