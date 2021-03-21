"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnloackLoginController = void 0;
class UnloackLoginController {
    constructor(unloackLoginUseCase) {
        this.unloackLoginUseCase = unloackLoginUseCase;
    }
    async handler(req, res) {
        const { id, code, email } = req.body;
        try {
            const user = await this.unloackLoginUseCase.execute({
                _id: id,
                email,
                active: 0,
                updatedAt: new Date()
            }, { code });
            return res.status(200).send({ Ok: 'Usuário liberado com sucesso!' });
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao desblockear usuário: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.UnloackLoginController = UnloackLoginController;
