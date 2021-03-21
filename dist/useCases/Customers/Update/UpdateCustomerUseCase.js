"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCustomerUseCase = void 0;
const Customer_1 = require("../../../entities/Customer");
class UpdateCustomerUseCase {
    constructor(customersReporitory) {
        this.customersReporitory = customersReporitory;
    }
    async execute(data) {
        const customer = new Customer_1.CustomerSchema(data);
        const customerUpdated = await this.customersReporitory.save(customer);
        if (!customerUpdated)
            return null;
        const customerUpdate = await this.customersReporitory.findById(customer.id);
        return customerUpdate;
    }
}
exports.UpdateCustomerUseCase = UpdateCustomerUseCase;
