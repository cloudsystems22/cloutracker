"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerController = void 0;
class UpdateCustomerController {
    constructor(updateCustomerUseCase) {
        this.updateCustomerUseCase = updateCustomerUseCase;
    }
    async handle(req, res) {
        const { id, customerId, pfpj, cnpj, ie, razao_social, nome_fantasia, cnae, ramoatividade, graurisco, griscoinss, logradouro, numero, bairro, cep, municipio, estado, site, logo, longitude, latitude, } = req.body;
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
            });
            return res.status(200).send(user);
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao atualizar usuário: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.UpdateCustomerController = UpdateCustomerController;
