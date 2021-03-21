"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContatosController = void 0;
class UpdateContatosController {
    constructor(updateContatosUseCase) {
        this.updateContatosUseCase = updateContatosUseCase;
    }
    async handle(req, res) {
        const { id, contato } = req.body;
        console.log(req.body);
        try {
            const updateContato = await this.updateContatosUseCase
                .execute({
                _id: id,
                contato,
                updatedAt: new Date(),
            });
            return res.status(200).send(updateContato);
        }
        catch (err) {
            return res.status(400).send({
                menssagem: `Erro ao atualizar esse contato ${err.message} - Unexpected error`,
            });
        }
    }
}
exports.UpdateContatosController = UpdateContatosController;
