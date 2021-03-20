import { Request, Response } from "express";
import { SearchCustomerUseCase } from './SearchCustomerUseCase';

export class SearchCustomerController {
    constructor(
        private searchCustomerUseCase: SearchCustomerUseCase
    ) { }

    async handler(req: Request, res: Response): Promise<Response> {
        const { descript } = req.params;
        try {
            const customerSearched = await this.searchCustomerUseCase.execute(descript);
            return res.status(200).send(customerSearched);
        } catch (err) {
            return res.status(400).send({
                message: "Erro ao pesquisar Cliente: " + err.message || "Unexpected error."
            })
        }
    }
}