import { Request, Response } from "express"
import { CreateCustomerUseCase } from "./CreateCustomerUseCase"

export class CreateCustomerController {
    constructor(
        private createCustomerUseCase: CreateCustomerUseCase
    ) { }

    async handle(req: Request, res: Response): Promise<Response> {
        const {
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
            const newCustomer = await this.createCustomerUseCase
                .execute(
                    {
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
                        createdAt: new Date(),
                        updatedAt: new Date(),
                    }
                );
            return res.status(200).send(newCustomer)
        } catch (err) {
            return res.status(400).send({
                mensagem: `Erro ao cadastrar Cliente ${err.message} - Unexped error!`
            })
        }
    }

}