import { ICustomerModel, CustomerSchema } from '../entities/Customer';

export interface ICustomersRepository {
    create(customer: ICustomerModel): Promise<ICustomerModel>
    save(customer: ICustomerModel): Promise<ICustomerModel>
    findById(id: String): Promise<ICustomerModel>
    findByCnpj(cnpj: String): Promise<ICustomerModel>
    showAll(): Promise<ICustomerModel[]>
    search(descript: string): Promise<ICustomerModel[]>
    addContato(customer: ICustomerModel): Promise<ICustomerModel>
    updateContato(customer: ICustomerModel): Promise<ICustomerModel>
    delContato(customer: ICustomerModel): Promise<ICustomerModel>
}