export interface IUpdateContatosRequestDTO {
    _id: { type: string };
    contato: [
        {
            _id: { type: string };
            email: string;
            phone: string;
            cell: string;
        }
    ]
    updatedAt: Date;
}