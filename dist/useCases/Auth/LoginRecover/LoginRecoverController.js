"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginRecoverController = void 0;
class LoginRecoverController {
    constructor(loginRecoverUseCase) {
        this.loginRecoverUseCase = loginRecoverUseCase;
    }
    async handler(req, res) {
        const { email, type } = req.params;
        try {
            const userExist = await this.loginRecoverUseCase.execute(email, type);
            return res.status(200).send({ Id: userExist.id, Email: userExist.email, Usuário: `Um email com link de recuperação de senha foi enviado para: ${(userExist.firstName) ? userExist.firstName : 'Nome não informado!'} em: ${userExist.email}` });
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao tentar recuperar senha: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.LoginRecoverController = LoginRecoverController;
