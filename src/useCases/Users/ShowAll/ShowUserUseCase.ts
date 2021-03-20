import { IUsersRepository } from '../../../repositories/IUsersReporitory'


export class ShowUserUseCase{
    constructor (
        private userRepository: IUsersRepository
    ){}

    async execute(){
        const usersAll = await this.userRepository.showAll();
        return usersAll;
    }
}