"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerSchema = void 0;
const Conexao_1 = __importDefault(require("./implementations/Conexao"));
const schema = new Conexao_1.default.Schema({
    customerId: {
        type: Number,
        require: true,
    },
    pfpj: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        required: true,
    },
    ie: {
        type: String,
        required: true,
    },
    razao_social: {
        type: String,
        required: true,
    },
    nome_fantasia: String,
    cnae: String,
    ramoatividade: String,
    graurisco: String,
    griscoinss: String,
    logradouro: String,
    numero: String,
    bairro: String,
    cep: String,
    municipio: String,
    estado: String,
    site: String,
    contato: Array({
        email: String,
        phone: String,
        cell: String
    }),
    logo: String,
    longitude: String,
    latitude: String,
    createdAt: Date,
    updatedAt: Date,
});
exports.CustomerSchema = Conexao_1.default.model('Customer', schema);
