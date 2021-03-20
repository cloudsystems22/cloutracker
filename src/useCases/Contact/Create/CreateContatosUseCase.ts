import { ICustomerModel, CustomerSchema } from "../../../entities/Customer";
import { ICustomersRepository } from "../../../repositories/ICustomersRepository";
import { ICreateContatosRequestDTO } from "./CreateContatosDTO";

export class CreateContatosUseCase {
    constructor(
        private customerRepository: ICustomersRepository
    ) { }

    async execute(data: ICreateContatosRequestDTO) {
        const contato: ICustomerModel = new CustomerSchema(data);
        const addContato = await this.customerRepository.addContato(contato);

        return addContato

    }
}