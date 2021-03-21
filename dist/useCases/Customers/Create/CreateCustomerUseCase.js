"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCustomerUseCase = void 0;
const Customer_1 = require("../../../entities/Customer");
class CreateCustomerUseCase {
    constructor(customerRepository) {
        this.customerRepository = customerRepository;
    }
    async execute(data) {
        const customerAlreadyExist = await this.customerRepository.findByCnpj(data.cnpj);
        if (customerAlreadyExist) {
            throw new Error("O Cliente já existe!");
        }
        const customer = new Customer_1.CustomerSchema(data);
        const newCustomer = await this.customerRepository.create(customer);
        return newCustomer;
    }
}
exports.CreateCustomerUseCase = CreateCustomerUseCase;
