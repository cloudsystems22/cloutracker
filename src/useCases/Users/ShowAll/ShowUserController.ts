import { Request, Response } from "express"
import { ShowUserUseCase } from "./ShowUserUseCase"

export class ShowUserController {
    constructor(
        private showUserUseCase: ShowUserUseCase
    ) { }

    async handler(req: Request, res: Response): Promise<Response> {
        try {
            const usersAll = await this.showUserUseCase.execute();
            return res.status(200).send(usersAll);
        } catch (err) {
            return res.status(400).send({
                message: "Erro ao carregar todos os usuários: " + err.message || "Unexpected error."
            })
        }
    }
}