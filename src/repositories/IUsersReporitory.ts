import { IUserModel, UserSchema } from '../entities/User';

export interface IUsersRepository{
    create(user: IUserModel): Promise<IUserModel>
    save(user: IUserModel): Promise<IUserModel>
    findByEmail(email:string): Promise<IUserModel>
    findById(id:string): Promise<IUserModel>
    showAll(): Promise<IUserModel[]>
    search(descript:String): Promise<IUserModel[]>
}