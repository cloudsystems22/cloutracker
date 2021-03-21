"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailsCustomerUseCase = void 0;
class DetailsCustomerUseCase {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(id) {
        const customerDetails = await this.customerRepository.findById(id);
        return customerDetails;
    }
}
exports.DetailsCustomerUseCase = DetailsCustomerUseCase;
