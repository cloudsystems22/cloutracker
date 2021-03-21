"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowCustomerController = void 0;
class ShowCustomerController {
    constructor(showCustomerUseCase) {
        this.showCustomerUseCase = showCustomerUseCase;
    }
    async handle(req, res) {
        try {
            const customersAll = await this.showCustomerUseCase.execute();
            return res.status(200).send(customersAll);
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao carregar todos os Clientes: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.ShowCustomerController = ShowCustomerController;
