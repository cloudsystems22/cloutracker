"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateLicenseController = void 0;
class UpdateLicenseController {
    constructor(UpdateLicenseUseCase) {
        this.UpdateLicenseUseCase = UpdateLicenseUseCase;
    }
    async handle(req, res) {
        const { id, description, users, services, totalLicense, Status } = req.body;
        try {
            const updateLicense = await this.UpdateLicenseUseCase
                .execute({
                _id: id,
                description,
                totalLicense,
                Status,
                updatedAt: new Date()
            });
            return res.status(200).send(updateLicense);
        }
        catch (err) {
            return res.status(400).send({
                mensagem: `Erro ao editar Licença ${err.message} - Unexped error!`
            });
        }
    }
}
exports.UpdateLicenseController = UpdateLicenseController;
