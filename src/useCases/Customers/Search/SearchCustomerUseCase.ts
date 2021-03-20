import { ICustomersRepository } from '../../../repositories/ICustomersRepository';

export class SearchCustomerUseCase {
    constructor(
        private customerRepository: ICustomersRepository
    ){}

    async execute(descripty:string){
        const customerSearched = await this.customerRepository.search(descripty)
        return customerSearched
    }
}