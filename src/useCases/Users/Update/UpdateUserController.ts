import { Request, Response } from "express"
import { UpdateUserUseCase } from "./UpdateUserUseCase"

export class UpdateUserController {
    constructor (
        private updateUserUseCase: UpdateUserUseCase
    ) {}

    async handler(req:Request, res:Response): Promise<Response>{
        const { id, userName, firstName, lastName } = req.body;
        try{
            const user = await this.updateUserUseCase.execute({
                _id:id,
                userName,
                firstName,
                lastName,
                updatedAt: new Date()
            })
            return res.status(200).send(user);
        } catch(err){
            return res.status(400).send({
                message: "Erro ao atualizar usuário: " + err.message || "Unexpected error."
            })
        }
    }
}