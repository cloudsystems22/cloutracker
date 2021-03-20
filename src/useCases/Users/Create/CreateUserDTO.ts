export interface ICreateUserRequestDTO {
    userName: string;
    email: string;
    cell: string;
    passwordResetToken: String;
    password: string;
    active: Number;
    createdAt: Date;
    updatedAt: Date;
}

export interface ICodeDTO{
    code: string;
}