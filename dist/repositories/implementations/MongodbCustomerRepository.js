"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbCustomerRepository = void 0;
const Customer_1 = require("../../entities/Customer");
class MongodbCustomerRepository {
    async create(customer) {
        const newCustomer = await Customer_1.CustomerSchema.create(customer);
        return newCustomer;
    }
    async save(customer) {
        const updateCustomer = await Customer_1.CustomerSchema
            .findByIdAndUpdate({
            _id: customer.id
        }, {
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
        }, {
            new: true
        });
        return updateCustomer;
    }
    async findById(id) {
        const customerExist = await Customer_1.CustomerSchema
            .findById({
            _id: id
        });
        return customerExist;
    }
    async findByCnpj(cnpj) {
        const customerExist = await Customer_1.CustomerSchema.findOne({ cnpj });
        return customerExist;
    }
    async showAll() {
        const customerAll = await Customer_1.CustomerSchema.find();
        return customerAll;
    }
    async search(descript) {
        const customerRegex = new RegExp(descript, 'i');
        const customerSearch = await Customer_1.CustomerSchema.find({
            $or: [
                { razao_social: customerRegex },
                { cnpj: customerRegex }
            ]
        });
        return customerSearch;
    }
    async addContato(customer) {
        const customerAddContato = await Customer_1.CustomerSchema
            .findById({
            _id: customer._id
        });
        customerAddContato === null || customerAddContato === void 0 ? void 0 : customerAddContato.contato.push(customer.contato[0]);
        customerAddContato === null || customerAddContato === void 0 ? void 0 : customerAddContato.save();
        return customerAddContato;
    }
    async updateContato(customer) {
        const customerUpContato = await Customer_1.CustomerSchema
            .findOneAndUpdate({
            _id: customer._id,
        }, {
            $set: {
                'contato.$[c]': customer.contato
            }
        }, {
            arrayFilters: [
                {
                    'c._id': customer.contato[0]._id
                }
            ],
            new: true
        });
        return customerUpContato;
    }
    async delContato(customer) {
        const customerDelContato = await Customer_1.CustomerSchema
            .findOneAndUpdate({
            _id: customer._id,
        }, {
            $pull: {
                contato: { _id: customer.contato[0]._id }
            }
        }, {
            new: true
        });
        return customerDelContato;
    }
}
exports.MongodbCustomerRepository = MongodbCustomerRepository;
