export interface IUpdateUserRequestDTO {
    _id: { type: string};
    userName: string;
    firstName: string;
    lastName: string;
    updatedAt: Date;
}