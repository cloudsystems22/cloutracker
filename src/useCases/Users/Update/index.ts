import { MongodbUserRepository } from "../../../repositories/implementations/MongodbUserRepository";
import { UpdateUserController } from './UpdateUserController';
import { UpdateUserUseCase } from './UpdateUserUseCase';

const mongodbUserRepository = new MongodbUserRepository()

const updateUserUseCase = new UpdateUserUseCase(
    mongodbUserRepository,
)

const updateUserController = new UpdateUserController(
    updateUserUseCase
)

export { updateUserUseCase, updateUserController }