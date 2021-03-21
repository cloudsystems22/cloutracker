"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCustomerController = void 0;
class SearchCustomerController {
    constructor(searchCustomerUseCase) {
        this.searchCustomerUseCase = searchCustomerUseCase;
    }
    async handler(req, res) {
        const { descript } = req.params;
        try {
            const customerSearched = await this.searchCustomerUseCase.execute(descript);
            return res.status(200).send(customerSearched);
        }
        catch (err) {
            return res.status(400).send({
                message: "Erro ao pesquisar Cliente: " + err.message || "Unexpected error."
            });
        }
    }
}
exports.SearchCustomerController = SearchCustomerController;
