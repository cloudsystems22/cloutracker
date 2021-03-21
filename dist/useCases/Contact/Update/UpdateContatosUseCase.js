"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateContatosUseCase = void 0;
const Customer_1 = require("../../../entities/Customer");
class UpdateContatosUseCase {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(data) {
        const contato = new Customer_1.CustomerSchema(data);
        const updateContato = await this.customerRepository.updateContato(contato);
        return updateContato;
    }
}
exports.UpdateContatosUseCase = UpdateContatosUseCase;
