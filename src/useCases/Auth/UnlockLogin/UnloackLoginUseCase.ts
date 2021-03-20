import { IUserModel, UserSchema } from '../../../entities/User'
import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IUnloackLoginRequestDTO } from './UnloackLoginDTO'
import { ICodeDTO } from '../ICodeDTO';

export class UnloackLoginUseCase{
    constructor (
        private unloackLoginReporitory: IAuthRepository
    ){}

    async execute(data: IUnloackLoginRequestDTO, code:ICodeDTO){
        const user: IUserModel = new UserSchema(data);
        const userUpdated = await this.unloackLoginReporitory.unloack(user, code);
        if(!userUpdated) return null!
        
        return true;
    }
}