import { Request, Response } from "express";
import { UpdateContatosUseCase } from "./UpdateContatosUseCase";

export class UpdateContatosController {
    constructor(
        private updateContatosUseCase: UpdateContatosUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id, contato } = req.body
        console.log(req.body)
        try {
            const updateContato = await this.updateContatosUseCase
                .execute(
                    {
                        _id: id,
                        contato,
                        updatedAt: new Date(),
                    }
                )
            return res.status(200).send(updateContato)
        } catch (err) {
            return res.status(400).send({
                menssagem: `Erro ao atualizar esse contato ${err.message} - Unexpected error`,
            });
        }

    }
}