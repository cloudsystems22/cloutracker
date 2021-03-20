export interface IDeleteContatosRequestDTO {
    _id: { type: string };
    contato: [
        {
            _id: { type: string };
        }
    ]
    updatedAt: Date;
}