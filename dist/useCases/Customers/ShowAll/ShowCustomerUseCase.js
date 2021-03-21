"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShowCustomerUseCase = void 0;
class ShowCustomerUseCase {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute() {
        const customersAll = await this.customerRepository.showAll();
        return customersAll;
    }
}
exports.ShowCustomerUseCase = ShowCustomerUseCase;
