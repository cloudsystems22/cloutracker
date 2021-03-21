"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsLicenseController = void 0;
class DetailsLicenseController {
    constructor(detailsLicenseUseCase) {
        this.detailsLicenseUseCase = detailsLicenseUseCase;
    }
    async handle(req, res) {
        const { id } = req.params;
        try {
            const licenseDetails = await this.detailsLicenseUseCase.execute(id);
            return res.status(200).send(licenseDetails);
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao pesquisar Licensa: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.DetailsLicenseController = DetailsLicenseController;
