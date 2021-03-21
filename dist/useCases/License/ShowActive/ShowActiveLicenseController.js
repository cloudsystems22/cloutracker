"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowActiveLicenseController = void 0;
class ShowActiveLicenseController {
    constructor(showActiveLicenseUseCase) {
        this.showActiveLicenseUseCase = showActiveLicenseUseCase;
    }
    async handle(req, res) {
        const { active } = req.params;
        try {
            const licenseActive = await this.showActiveLicenseUseCase
                .execute(parseInt(active));
            return res.status(200).send(licenseActive);
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao carregar licensas: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.ShowActiveLicenseController = ShowActiveLicenseController;
