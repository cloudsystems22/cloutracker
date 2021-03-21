"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateUserController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const endpoint_config_1 = __importDefault(require("../../../endpoint.config"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class CreateUserController {
    constructor(createUserUseCase) {
        this.createUserUseCase = createUserUseCase;
        this.generateCode = () => {
            const token = [];
            const alph = 'ABCDEFGHIJLMNOPQRSTUVXYZ0123456789';
            for (let i = 0; i < 6; i++) {
                token[i] = alph.charAt(Math.floor(Math.random() * alph.length));
            }
            return token.join('');
        };
    }
    generationToken(params = {}) {
        return jsonwebtoken_1.default.sign(params, endpoint_config_1.default.appSecret, {
            expiresIn: 86400,
        });
    }
    async handle(req, res) {
        const { userName, email, cell, password } = req.body;
        const code = this.generateCode();
        try {
            const newUser = await this.createUserUseCase.execute({
                userName,
                email,
                passwordResetToken: await bcryptjs_1.default.hashSync(code, 10),
                password: await bcryptjs_1.default.hashSync(password, 10),
                active: 1,
                cell,
                createdAt: new Date(),
                updatedAt: new Date()
            }, { code });
            return res.status(201).send({ "Id": newUser._id, "Email": newUser.email, "Token": this.generationToken({ id: newUser.id }) });
        }
        catch (err) {
            return res.status(401).send({
                message: "Erro ao inserir um novo usuário: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.CreateUserController = CreateUserController;
