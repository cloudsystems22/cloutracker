import { ICustomerModel, CustomerSchema } from '../../entities/Customer';
import { ICustomersRepository } from '../ICustomersRepository';

export class MongodbCustomerRepository implements ICustomersRepository {
    async create(customer: ICustomerModel): Promise<ICustomerModel> {
        const newCustomer = await CustomerSchema.create(customer)
        return newCustomer!
    }

    async save(customer: ICustomerModel): Promise<ICustomerModel> {
        const updateCustomer = await CustomerSchema
            .findByIdAndUpdate(
                {
                    _id: customer.id
                },
                {
                    $set: {
                        _id: customer._id,
                        customerId: customer.customerId,
                        pfpj: customer.pfpj,
                        cnpj: customer.cnpj,
                        ie: customer.ie,
                        razao_social: customer.razao_social,
                        nome_fantasia: customer.nome_fantasia,
                        cnae: customer.cnae,
                        ramoatividade: customer.ramoatividade,
                        graurisco: customer.graurisco,
                        griscoinss: customer.griscoinss,
                        logradouro: customer.logradouro,
                        numero: customer.numero,
                        bairro: customer.bairro,
                        cep: customer.cep,
                        municipio: customer.municipio,
                        estado: customer.estado,
                        site: customer.site,
                        logo: customer.logo,
                        longitude: customer.longitude,
                        latitude: customer.latitude,
                        updatedAt: customer.updatedAt,
                    }
                },
                {
                    new: true
                }
            );

        return updateCustomer!
    }

    async findById(id: string): Promise<ICustomerModel> {
        const customerExist = await CustomerSchema
            .findById(
                {
                    _id: id
                }
            )

        return customerExist!
    }

    async findByCnpj(cnpj: string): Promise<ICustomerModel> {
        const customerExist = await CustomerSchema.findOne({ cnpj })
        return customerExist!;
    }

    async showAll(): Promise<ICustomerModel[]> {
        const customerAll = await CustomerSchema.find()
        return customerAll
    }

    async search(descript: string): Promise<ICustomerModel[]> {
        const customerRegex = new RegExp(descript, 'i')
        const customerSearch = await CustomerSchema.find(
            {
                $or: [
                    { razao_social: customerRegex },
                    { cnpj: customerRegex }
                ]
            }
        );

        return customerSearch
    }

    async addContato(customer: ICustomerModel): Promise<ICustomerModel> {
        const customerAddContato = await CustomerSchema
            .findById(
                {
                    _id: customer._id
                }
            )

        customerAddContato?.contato.push(customer.contato[0])
        customerAddContato?.save();

        return customerAddContato!
    }

    async updateContato(customer: ICustomerModel): Promise<ICustomerModel> {
        const customerUpContato = await CustomerSchema
            .findOneAndUpdate(
                {
                    _id: customer._id,
                },
                {
                    $set: {
                        'contato.$[c]': customer.contato
                    }
                },
                {
                    arrayFilters: [
                        {
                            'c._id': customer.contato[0]._id
                        }
                    ],
                    new: true
                },
            )
        return customerUpContato!
    }

    async delContato(customer: ICustomerModel): Promise<ICustomerModel> {
        const customerDelContato = await CustomerSchema
            .findOneAndUpdate(
                {
                    _id: customer._id,
                },
                {
                    $pull: {
                        contato: { _id: customer.contato[0]._id }
                    }
                },
                {
                    new: true
                }

            )

        return customerDelContato!
    }
}