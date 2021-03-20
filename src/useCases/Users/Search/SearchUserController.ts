import { Request, Response } from "express";
import { SearchUserUseCase } from './SearchUserUseCase';

export class SearchUserController {
    constructor(
        private searchUseUseCase: SearchUserUseCase
    ) { }

    async handler(req: Request, res: Response): Promise<Response> {
        const { descript } = req.params;
        try {
            const userSearched = await this.searchUseUseCase.execute(descript)
            return res.status(200).send(userSearched);
        } catch (err) {
            return res.status(400).send({
                message: "Erro ao pesquisar Usuário: " + err.message || "Unexpected error."
            })
        }
    }
}