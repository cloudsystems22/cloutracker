"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LicenseSchema = void 0;
const Conexao_1 = __importDefault(require("./implementations/Conexao"));
const schema = new Conexao_1.default.Schema({
    customer: {
        type: Conexao_1.default.Schema.Types.ObjectId,
        ref: 'Customer',
        required: true
    },
    clients: Array({
        type: Conexao_1.default.Schema.Types.ObjectId,
        ref: 'Customer',
        require: true
    }),
    description: String,
    ipAssign: String,
    dataAssign: Date,
    license: String,
    users: Array({
        type: Conexao_1.default.Schema.Types.ObjectId,
        ref: 'User',
        require: true
    }),
    services: [
        {
            description: String,
            value: Number,
        }
    ],
    totalLicense: Number,
    Status: Number,
    createdAt: Date,
    updatedAt: Date,
});
exports.LicenseSchema = Conexao_1.default.model('License', schema);
