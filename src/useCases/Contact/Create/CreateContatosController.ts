import { Request, Response } from "express";
import { CreateContatosUseCase } from "./CreateContatosUseCase";

export class CreateContatosController {
    constructor(
        private createContatosUseCase: CreateContatosUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const { id, contato } = req.body
        try {
            const addContato = await this.createContatosUseCase
                .execute(
                    {
                        _id:id,
                        contato,
                        updatedAt: new Date(),
                    }
                )
            return res.status(200).send(addContato);

        } catch (err) {
            return res.status(400).send({
                menssagem: `Erro ao inserir esse contato ${err.message} - Unexpected error`,
            });
            
        }
    }
}