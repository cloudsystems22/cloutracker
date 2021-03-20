export interface IUpdatePasswordRequestDTO {
    _id: { type: string};
    email: string;
    password: string;
    updatedAt: Date;
}
