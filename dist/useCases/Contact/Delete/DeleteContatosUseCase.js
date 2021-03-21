"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteContatosUseCase = void 0;
const Customer_1 = require("../../../entities/Customer");
class DeleteContatosUseCase {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(data) {
        const contato = new Customer_1.CustomerSchema(data);
        this.customerRepository.delContato(contato).then(() => {
            return true;
        }).catch((err) => {
            return false;
        });
    }
}
exports.DeleteContatosUseCase = DeleteContatosUseCase;
