"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginController = void 0;
const endpoint_config_1 = __importDefault(require("../../../endpoint.config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class LoginController {
    constructor(loginUseCase) {
        this.loginUseCase = loginUseCase;
    }
    generationToken(params = {}) {
        return jsonwebtoken_1.default.sign(params, endpoint_config_1.default.appSecret, {
            expiresIn: 86400,
        });
    }
    async handle(req, res) {
        const { email, password } = req.body;
        try {
            const userExsit = await this.loginUseCase.execute(email, password);
            return res.status(200).send({ "Id": userExsit.id, "User": userExsit.userName, "Email": userExsit.email, "Token": this.generationToken({ id: userExsit.id }) });
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao tentar logar " + err.message || "Unexpected error."
            });
        }
    }
}
exports.LoginController = LoginController;
