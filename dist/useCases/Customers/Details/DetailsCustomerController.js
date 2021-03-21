"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsCustomerController = void 0;
class DetailsCustomerController {
    constructor(detailsCustomerUseCase) {
        this.detailsCustomerUseCase = detailsCustomerUseCase;
    }
    async handler(req, res) {
        const { id } = req.params;
        try {
            const customerDetails = await this.detailsCustomerUseCase.execute(id);
            return res.status(200).send(customerDetails);
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao pesquisar Cliente: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.DetailsCustomerController = DetailsCustomerController;
