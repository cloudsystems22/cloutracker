"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const Create_1 = require("../useCases/License/Create");
const Details_1 = require("../useCases/License/Details");
const Update_1 = require("../useCases/License/Update");
const ShowActive_1 = require("../useCases/License/ShowActive");
const routes = express_1.Router();
routes.get("/licenses/:active", (req, res) => {
    return ShowActive_1.showActiveLicenseController.handle(req, res);
});
routes.get("/:id", (req, res) => {
    return Details_1.detailsLicenseController.handle(req, res);
});
routes.post("/", (req, res) => {
    return Create_1.createLicenseController.handle(req, res);
});
routes.put("/", (req, res) => {
    return Update_1.updateLicenseController.handle(req, res);
});
exports.default = routes;
