import { IUsersRepository } from '../../../repositories/IUsersReporitory'

export class SearchUserUseCase{
    constructor(
        private userRepository: IUsersRepository
    ){}

    async execute(descripty:String){
        const userSearched = await this.userRepository.search(descripty)
        return userSearched
    }
}