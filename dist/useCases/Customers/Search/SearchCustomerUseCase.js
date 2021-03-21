"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchCustomerUseCase = void 0;
class SearchCustomerUseCase {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(descripty) {
        const customerSearched = await this.customerRepository.search(descripty);
        return customerSearched;
    }
}
exports.SearchCustomerUseCase = SearchCustomerUseCase;
