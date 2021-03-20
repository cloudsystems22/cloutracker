import mongoose from './implementations/Conexao'

export interface ICustomerModel extends mongoose.Document{
    _id: { type: string },
    customerId: number,
    pfpj: string,
    cnpj: string,
    ie: string,
    razao_social:string,
    nome_fantasia:String,
    cnae: string,
    ramoatividade: string,
    graurisco: string,
    griscoinss: string,
    logradouro: string,
    numero: string,
    bairro: string,
    cep: string,
    municipio: string,
    estado: string,
    site: string,
    contato: [
        {
            _id: { type: string },
            email: String,
            phone: String,
            cell: String
        }
    ]
    logo: string,
    longitude: string,
    latitude: string,
    createdAt: Date,
    updatedAt: Date,
}

const schema = new mongoose.Schema({
    customerId: {
        type:Number,
        require:true,
    },
    pfpj: {
        type: String,
        required: true,
    },
    cnpj: {
        type: String,
        required: true,
    },
    ie:{
        type: String,
        required: true,
    },
    razao_social:{
        type: String,
        required: true,
    },
    nome_fantasia:String,
    cnae: String,
    ramoatividade: String,
    graurisco: String,
    griscoinss: String,
    logradouro: String,
    numero: String,
    bairro: String,
    cep: String,
    municipio: String,
    estado: String,
    site: String,
    contato: Array(
        {
            email: String,
            phone: String,
            cell: String
        }
    ),
    logo: String,
    longitude: String,
    latitude: String,
    createdAt: Date,
    updatedAt: Date,

})

export const CustomerSchema = mongoose.model<ICustomerModel>('Customer', schema)