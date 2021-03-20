import { ICustomerModel, CustomerSchema } from "../../../entities/Customer";
import { ICustomersRepository } from "../../../repositories/ICustomersRepository";
import { IUpdateContatosRequestDTO } from "./UpdateContatosDTO";

export class UpdateContatosUseCase {
    constructor(
        private customerRepository: ICustomersRepository
    ) { }

    async execute(data: IUpdateContatosRequestDTO) {
        const contato: ICustomerModel = new CustomerSchema(data);
        const updateContato = await this.customerRepository.updateContato(contato);

        return updateContato
    }
}
