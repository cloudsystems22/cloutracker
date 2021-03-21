"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
const Conexao_1 = __importDefault(require("./implementations/Conexao"));
const schema = new Conexao_1.default.Schema({
    userId: {
        type: Number,
        require: true
    },
    userName: {
        type: String,
        require: true,
    },
    firstName: String,
    lastName: String,
    email: String,
    cell: String,
    password: {
        type: String,
        require: true
    },
    passwordResetToken: String,
    active: Number,
    nivel: String,
    permitions: Array({
        path: String,
        module: String,
    }),
    createdAt: Date,
    updatedAt: Date,
});
exports.UserSchema = Conexao_1.default.model('User', schema);
