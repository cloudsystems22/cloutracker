"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Create_1 = require("../useCases/Customers/Create");
const Search_1 = require("../useCases/Customers/Search");
const Details_1 = require("../useCases/Customers/Details");
const ShowAll_1 = require("../useCases/Customers/ShowAll");
const Update_1 = require("../useCases/Customers/Update");
const Create_2 = require("../useCases/Contact/Create");
const Update_2 = require("../useCases/Contact/Update");
const Delete_1 = require("../useCases/Contact/Delete");
const routes = express_1.Router();
routes.get("/", (req, res) => {
    return ShowAll_1.showCustomerController.handle(req, res);
});
routes.post("/", (req, res) => {
    return Create_1.createCustomerController.handle(req, res);
});
routes.get("/search/:descript", (req, res) => {
    return Search_1.searchCustomerController.handler(req, res);
});
routes.get("/details/:id", (req, res) => {
    return Details_1.detailsCustomerController.handler(req, res);
});
routes.put("/", (req, res) => {
    return Update_1.updateCustomerController.handle(req, res);
});
//Contatos
routes.post("/contato", (req, res) => {
    return Create_2.createContatosController.handle(req, res);
});
routes.put("/contato", (req, res) => {
    return Update_2.updateContatosController.handle(req, res);
});
routes.delete("/contato", (req, res) => {
    return Delete_1.deleteContatosController.handle(req, res);
});
exports.default = routes;
