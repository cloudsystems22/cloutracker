import { IUserModel, UserSchema } from '../entities/User';
import { ICodeDTO } from '../useCases/Auth/ICodeDTO'

export interface IAuthRepository{
    login(email:string, password:string): Promise<IUserModel>
    recover(email:string): Promise<IUserModel>
    unloack(user:IUserModel, code:ICodeDTO): Promise<IUserModel>
    updatepassword(user:IUserModel, code:ICodeDTO): Promise<IUserModel>
    passwordToken(user:IUserModel): Promise<IUserModel>
}