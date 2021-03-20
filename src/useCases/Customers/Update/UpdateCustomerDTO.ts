export interface IUpdateCustomerRequestDTO {
    _id: { type: string};
    customerId: number;
    pfpj: string;
    cnpj: string;
    ie: string;
    razao_social: string;
    nome_fantasia: string;
    cnae: string;
    ramoatividade: string;
    graurisco: string;
    griscoinss: string;
    logradouro: string;
    numero: string;
    bairro: string;
    cep: string;
    municipio: string;
    estado: string;
    site: string;
    logo: string;
    longitude: string;
    latitude: string;
    updatedAt: Date;
}