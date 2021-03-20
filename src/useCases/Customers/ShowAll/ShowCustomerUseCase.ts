import { ICustomersRepository } from '../../../repositories/ICustomersRepository'


export class ShowCustomerUseCase {
    constructor(
        private customerRepository: ICustomersRepository
    ) { }

    async execute() {
        const customersAll = await this.customerRepository.showAll();
        return customersAll;
    }
}