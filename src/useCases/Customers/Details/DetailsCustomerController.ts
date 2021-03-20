import { Request, Response } from "express";
import { DetailsCustomerUseCase } from './DetailsCustomerUseCase';

export class DetailsCustomerController {
    constructor(
        private detailsCustomerUseCase: DetailsCustomerUseCase
    ) { }

    async handler(req: Request, res: Response): Promise<Response> {
        const { id } = req.params;
        try {
            const customerDetails = await this.detailsCustomerUseCase.execute(id);
            return res.status(200).send(customerDetails);
        } catch (err) {
            return res.status(400).send({
                message: "Erro ao pesquisar Cliente: " + err.message || "Unexpected error."
            })
        }
    }
}