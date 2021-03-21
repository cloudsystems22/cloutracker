"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateUserController = void 0;
class UpdateUserController {
    constructor(updateUserUseCase) {
        this.updateUserUseCase = updateUserUseCase;
    }
    async handler(req, res) {
        const { id, userName, firstName, lastName } = req.body;
        try {
            const user = await this.updateUserUseCase.execute({
                _id: id,
                userName,
                firstName,
                lastName,
                updatedAt: new Date()
            });
            return res.status(200).send(user);
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao atualizar usuário: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.UpdateUserController = UpdateUserController;
