"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowUserController = void 0;
class ShowUserController {
    constructor(showUserUseCase) {
        this.showUserUseCase = showUserUseCase;
    }
    async handler(req, res) {
        try {
            const usersAll = await this.showUserUseCase.execute();
            return res.status(200).send(usersAll);
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao carregar todos os usuários: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.ShowUserController = ShowUserController;
