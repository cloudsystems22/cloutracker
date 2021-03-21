"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContatosController = void 0;
class CreateContatosController {
    constructor(createContatosUseCase) {
        this.createContatosUseCase = createContatosUseCase;
    }
    async handle(req, res) {
        const { id, contato } = req.body;
        try {
            const addContato = await this.createContatosUseCase
                .execute({
                _id: id,
                contato,
                updatedAt: new Date(),
            });
            return res.status(200).send(addContato);
        }
        catch (err) {
            return res.status(400).send({
                menssagem: `Erro ao inserir esse contato ${err.message} - Unexpected error`,
            });
        }
    }
}
exports.CreateContatosController = CreateContatosController;
