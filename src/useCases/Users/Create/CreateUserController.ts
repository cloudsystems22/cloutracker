import { Request, Response } from "express"
import { CreateUserUseCase } from "./CreateUserUseCase"
import bcrypt from "bcryptjs";
import endpoint from '../../../endpoint.config';
import jwt from 'jsonwebtoken';
import { authMiddlewares } from "../../../Middlewares/authMiddlewares";


export class CreateUserController {

    constructor(
        private createUserUseCase: CreateUserUseCase
    ) { }

    generationToken(params = {}) {
        return jwt.sign(params, endpoint.appSecret, {
            expiresIn: 86400,
        });
    }

    generateCode = () =>{
        const token = []
        const alph = 'ABCDEFGHIJLMNOPQRSTUVXYZ0123456789'
        for(let i = 0; i < 6; i++ ){
            token[i] = alph.charAt(Math.floor(Math.random() * alph.length));
        }
        return token.join('')
    }

    async handle(req: Request, res: Response): Promise<Response> {
        const { userName, email, cell, password } = req.body;
        const code = this.generateCode()
        try {
            const newUser = await this.createUserUseCase.execute({
                userName,
                email,
                passwordResetToken: await bcrypt.hashSync(code, 10),
                password: await bcrypt.hashSync(password, 10),
                active: 1,
                cell,
                createdAt: new Date(),
                updatedAt: new Date()
            }, {code});
            return res.status(201).send({ "Id": newUser._id, "Email": newUser.email, "Token": this.generationToken({ id: newUser.id }) })
        } catch (err) {
            return res.status(401).send({
                message: "Erro ao inserir um novo usuário: " + err.message || "Unexpected error."
            })
        }
    }
}