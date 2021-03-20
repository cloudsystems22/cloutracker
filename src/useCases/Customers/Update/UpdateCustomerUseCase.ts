import { ICustomerModel, CustomerSchema } from '../../../entities/Customer'
import { ICustomersRepository } from '../../../repositories/ICustomersRepository'
import { IUpdateCustomerRequestDTO } from './UpdateCustomerDTO'

export class UpdateCustomerUseCase{
    constructor (
        private customersReporitory: ICustomersRepository
    ){}

    async execute(data: IUpdateCustomerRequestDTO){

        const customer: ICustomerModel = new CustomerSchema(data);
        const customerUpdated = await this.customersReporitory.save(customer);
        if(!customerUpdated) return null!
        
        const customerUpdate = await this.customersReporitory.findById(customer.id);
        return customerUpdate;
    }
}