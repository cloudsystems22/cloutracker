import { ICustomersRepository } from '../../../repositories/ICustomersRepository';

export class DetailsCustomerUseCase {
    constructor(
        private customerRepository: ICustomersRepository
    ) { }

    async execute(id: string) {
        const customerDetails = await this.customerRepository.findById(id)
        return customerDetails
    }
}