import { Request, Response } from "express"
import { UnloackLoginUseCase } from "./UnloackLoginUseCase"

export class UnloackLoginController {
    constructor (
        private unloackLoginUseCase: UnloackLoginUseCase
    ) {}

    async handler(req:Request, res:Response): Promise<Response>{
        const { id, code, email } = req.body;
        try{
            const user = await this.unloackLoginUseCase.execute({
                _id:id,
                email,
                active: 0,
                updatedAt: new Date()
            }, {code})
            return res.status(200).send({ Ok: 'Usuário liberado com sucesso!'});
        } catch(err){
            return res.status(400).send({
                message: "Erro ao desblockear usuário: " + err.message || "Unexpected error."
            })
        }
    }
}