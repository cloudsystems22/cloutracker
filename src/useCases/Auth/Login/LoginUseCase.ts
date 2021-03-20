import { IAuthRepository } from '../../../repositories/IAuthRepository'
//import { ILoginRequestDTO } from './LoginDTO'

export class LoginUseCase{
    constructor(
        private authRepository:IAuthRepository
    ){}

    async execute(email:string, password:string){
        const userExist = await this.authRepository.login(email, password)
        if(!userExist) {
            throw new Error("Usuário inexistente ou login bloqueado!")
        }

        return userExist
    }
}