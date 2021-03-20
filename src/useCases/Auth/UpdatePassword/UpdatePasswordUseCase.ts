import { IUserModel, UserSchema } from '../../../entities/User';
import { IAuthRepository } from "../../../repositories/IAuthRepository";
import { IUpdatePasswordRequestDTO } from "./UpdatePasswordDTO";
import { ICodeDTO } from '../ICodeDTO';

export class UpdatePasswordUseCase{
    constructor(
        private updatePasswordRepository: IAuthRepository
    ){}

    async execute(data: IUpdatePasswordRequestDTO, code:ICodeDTO){
        const user: IUserModel = new UserSchema(data);
        const userUpdated = await this.updatePasswordRepository.updatepassword(user, code);
         if(userUpdated == null) return false
        
        return true;
    }
}