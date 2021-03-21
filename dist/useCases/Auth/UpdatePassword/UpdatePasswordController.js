"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePasswordController = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
class UpdatePasswordController {
    constructor(updatePassworUseCase) {
        this.updatePassworUseCase = updatePassworUseCase;
    }
    async handler(req, res) {
        const { id, email, code, password } = req.body;
        try {
            const user = await this.updatePassworUseCase.execute({
                _id: id,
                email,
                password: await bcryptjs_1.default.hashSync(password, 10),
                updatedAt: new Date()
            }, { code });
            if (user)
                return res.status(200).send({ Ok: 'Password alterado com sucesso!' });
            return res.status(401).send({ Erro: 'Password não foi alterado!' });
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao atualizar password: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.UpdatePasswordController = UpdatePasswordController;
