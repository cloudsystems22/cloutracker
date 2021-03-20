export interface ICreateContatosRequestDTO {
    _id: { type: string };
    contato: [
        {
            email: string;
            phone: string;
            cell: string;
        }
    ]
    updatedAt: Date;
}