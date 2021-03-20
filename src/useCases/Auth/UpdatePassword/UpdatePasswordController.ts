import {Request, Response} from "express"
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase"
import bcrypt from "bcryptjs";

export class UpdatePasswordController{
    constructor(
        private updatePassworUseCase: UpdatePasswordUseCase
    ){}

    async handler(req:Request, res:Response): Promise<Response>{
        const { id, email, code, password } = req.body
        try{
            const user = await this.updatePassworUseCase.execute({
                _id:id,
                email,
                password: await bcrypt.hashSync(password, 10),
                updatedAt: new Date()
            }, {code})

            if(user) return res.status(200).send({ Ok: 'Password alterado com sucesso!'});

            return res.status(401).send({ Erro: 'Password não foi alterado!'})
        } catch(err){
            return res.status(400).send({
                message: "Erro ao atualizar password: " + err.message || "Unexpected error."
            })
        }
    }
}