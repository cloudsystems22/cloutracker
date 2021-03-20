import { Request, Response} from "express"
import { LoginUseCase } from './LoginUseCase'
import endpoint from '../../../endpoint.config'
import jwt from 'jsonwebtoken'

export class LoginController{
    constructor(
        private loginUseCase:LoginUseCase
        ){}
        
        generationToken(params = {}){
            return jwt.sign(params, endpoint.appSecret, {
                expiresIn: 86400,
            });
        }
       
    async handle(req:Request, res:Response){
        const {email, password} = req.body
        try{
            const userExsit = await this.loginUseCase.execute(
                email,
                password
            )
            return res.status(200).send({"Id":userExsit.id, "User": userExsit.userName, "Email": userExsit.email, "Token":this.generationToken({ id: userExsit.id }) })
        } catch(err){
            return res.status(400).send({
                message: "Erro ao tentar logar " + err.message || "Unexpected error."
            })
        }

    }
}
