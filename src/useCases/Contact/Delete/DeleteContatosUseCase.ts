import { ICustomerModel, CustomerSchema } from "../../../entities/Customer";
import { ICustomersRepository } from "../../../repositories/ICustomersRepository";
import { IDeleteContatosRequestDTO } from "./DeleteContatosDTO";

export class DeleteContatosUseCase {
    constructor(
        private customerRepository: ICustomersRepository
    ) { }

    async execute(data: IDeleteContatosRequestDTO) {
        const contato: ICustomerModel = new CustomerSchema(data);
        this.customerRepository.delContato(contato).then(() => {
            return true

        }).catch((err) => {
            return false

        });

    }
}