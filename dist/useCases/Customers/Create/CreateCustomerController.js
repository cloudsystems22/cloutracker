"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerController = void 0;
class CreateCustomerController {
    constructor(createCustomerUseCase) {
        this.createCustomerUseCase = createCustomerUseCase;
    }
    async handle(req, res) {
        const { customerId, pfpj, cnpj, ie, razao_social, nome_fantasia, cnae, ramoatividade, graurisco, griscoinss, logradouro, numero, bairro, cep, municipio, estado, site, logo, longitude, latitude, } = req.body;
        try {
            const newCustomer = await this.createCustomerUseCase
                .execute({
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
            });
            return res.status(200).send(newCustomer);
        }
        catch (err) {
            return res.status(400).send({
                mensagem: `Erro ao cadastrar Cliente ${err.message} - Unexped error!`
            });
        }
    }
}
exports.CreateCustomerController = CreateCustomerController;
