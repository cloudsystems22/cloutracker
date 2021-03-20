import { MongodbUserRepository } from "../../../repositories/implementations/MongodbUserRepository";
import { ShowUserController } from './ShowUserController'
import { ShowUserUseCase } from './ShowUserUseCase'

const mongodbUserRepository = new MongodbUserRepository()

const showUserUseCase = new ShowUserUseCase(
    mongodbUserRepository
)

const showUserController = new ShowUserController(
    showUserUseCase
)

export { showUserUseCase, showUserController }