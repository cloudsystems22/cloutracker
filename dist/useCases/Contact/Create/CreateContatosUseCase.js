"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateContatosUseCase = void 0;
const Customer_1 = require("../../../entities/Customer");
class CreateContatosUseCase {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(data) {
        const contato = new Customer_1.CustomerSchema(data);
        const addContato = await this.customerRepository.addContato(contato);
        return addContato;
    }
}
exports.CreateContatosUseCase = CreateContatosUseCase;
