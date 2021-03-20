import { Request, Response } from "express"
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase"

export class UpdateCustomerController {
    constructor(
        private updateCustomerUseCase: UpdateCustomerUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const {
            id,
            customerId,
            pfpj,
            cnpj,
            ie,
            razao_social,
            nome_fantasia,
            cnae,
            ramoatividade,
            graurisco,
            griscoinss,
            logradouro,
            numero,
            bairro,
            cep,
            municipio,
            estado,
            site,
            logo,
            longitude,
            latitude,
        } = req.body;
        try {
            const user = await this.updateCustomerUseCase.execute({
                _id: id,
                customerId,
                pfpj,
                cnpj,
                ie,
                razao_social,
                nome_fantasia,
                cnae,
                ramoatividade,
                graurisco,
                griscoinss,
                logradouro,
                numero,
                bairro,
                cep,
                municipio,
                estado,
                site,
                logo,
                longitude,
                latitude,
                updatedAt: new Date()
            })
            return res.status(200).send(user);
        } catch (err) {
            return res.status(400).send({
                message: "Erro ao atualizar usuário: " + err.message || "Unexpected error."
            })
        }
    }
}