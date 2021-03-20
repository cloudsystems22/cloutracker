import { Request, Response } from "express"
import { ShowCustomerUseCase } from "./ShowCustomerUseCase"

export class ShowCustomerController {
    constructor(
        private showCustomerUseCase: ShowCustomerUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        try {
            const customersAll = await this.showCustomerUseCase.execute();
            return res.status(200).send(customersAll);
        } catch (err) {
            return res.status(400).send({
                message: "Erro ao carregar todos os Clientes: " + err.message || "Unexpected error."
            })
        }
    }
}