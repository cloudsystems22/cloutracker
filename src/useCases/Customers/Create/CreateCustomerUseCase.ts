import { ICustomerModel, CustomerSchema } from "../../../entities/Customer";
import { ICustomersRepository } from "../../../repositories/ICustomersRepository";
import { ICreateCustomerRequestDTO } from "./CreateCustomerDTO";

export class CreateCustomerUseCase {
    constructor(
        private customerRepository: ICustomersRepository
    ) { }

    async execute(data: ICreateCustomerRequestDTO) {
        const customerAlreadyExist = await this.customerRepository.findByCnpj(data.cnpj);
        if(customerAlreadyExist){
            throw new Error("O Cliente já existe!")
        }

        const customer: ICustomerModel = new CustomerSchema(data);
        const newCustomer = await this.customerRepository.create(customer);

        return newCustomer
    }
}