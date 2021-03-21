"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const endpoint_config_1 = __importDefault(require("../../endpoint.config"));
//const uri = 'mongodb://localhost:27017/cloudtracker';
mongoose_1.default.connect(endpoint_config_1.default.mongoUri, { useNewUrlParser: true });
mongoose_1.default.Promise = global.Promise;
exports.default = mongoose_1.default;
