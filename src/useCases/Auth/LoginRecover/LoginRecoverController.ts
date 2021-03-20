import { Request, Response} from "express"
import { LoginRecoverUseCase } from "./LoginRecoverUseCase"

export class LoginRecoverController{
    constructor(
        private loginRecoverUseCase: LoginRecoverUseCase
    ) {}

    async handler(req:Request, res:Response){
        const { email, type } = req.params;
        
        try{
            const userExist = await this.loginRecoverUseCase.execute(email, type)
            
            return res.status(200).send({ Id: userExist.id, Email: userExist.email, Usuário: `Um email com link de recuperação de senha foi enviado para: ${(userExist.firstName)? userExist.firstName : 'Nome não informado!'} em: ${userExist.email}` })
        } catch(err){
            return res.status(400).send({
                message: "Erro ao tentar recuperar senha: " + err.message || "Unexpected error."
            })
        }

    }
}