import { MongodbUserRepository } from "../../../repositories/implementations/MongodbUserRepository";
import { SearchUserController } from "./SearchUserController"
import { SearchUserUseCase } from "./SearchUserUseCase"

const mongodbUserRepository = new MongodbUserRepository()

const searchUserUseCase = new SearchUserUseCase(
    mongodbUserRepository
)

const searchUserController = new SearchUserController(
    searchUserUseCase
)

export { searchUserUseCase, searchUserController }