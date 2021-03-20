import { IUserModel, UserSchema } from '../../../entities/User'
import { IUsersRepository } from '../../../repositories/IUsersReporitory'
import { IUpdateUserRequestDTO } from './UpdateUserDTO'

export class UpdateUserUseCase{
    constructor (
        private usersReporitory: IUsersRepository
    ){}

    async execute(data: IUpdateUserRequestDTO){

        const user: IUserModel = new UserSchema(data);
        const userUpdated = await this.usersReporitory.save(user);
        if(!userUpdated) return null!
        
        const userUpdate = await this.usersReporitory.findById(user.id);
        return userUpdate;
    }
}