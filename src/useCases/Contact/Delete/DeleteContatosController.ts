import { Request, Response } from "express";
import { DeleteContatosUseCase } from "./DeleteContatosUseCase";

export class DeleteContatosController {
    constructor(
        private deleteContatosUseCase: DeleteContatosUseCase
    ) { }

    async handle(req:Request, res:Response): Promise<Response>{
        const { id, contato } = req.body
        this.deleteContatosUseCase.execute({
            _id:id,
            contato,
            updatedAt: new Date()
        }).then(() => {
            return res.status(200).send({ Ok: "Contato excluido com sucesso!"})
        }).catch((err) => {
            return res.status(400).send({
                menssagem: `Erro ao tentar excluir: ${contato} - Unexpected erro: ${err.message} !`
            })
        })
        return undefined!
    }
}