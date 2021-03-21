"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContatosController = void 0;
class DeleteContatosController {
    constructor(deleteContatosUseCase) {
        this.deleteContatosUseCase = deleteContatosUseCase;
    }
    async handle(req, res) {
        const { id, contato } = req.body;
        this.deleteContatosUseCase.execute({
            _id: id,
            contato,
            updatedAt: new Date()
        }).then(() => {
            return res.status(200).send({ Ok: "Contato excluido com sucesso!" });
        }).catch((err) => {
            return res.status(400).send({
                menssagem: `Erro ao tentar excluir: ${contato} - Unexpected erro: ${err.message} !`
            });
        });
        return undefined;
    }
}
exports.DeleteContatosController = DeleteContatosController;
