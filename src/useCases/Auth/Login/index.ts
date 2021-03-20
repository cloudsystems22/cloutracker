import { MongodbAuthRepository } from "../../../repositories/implementations/MongodbAuthRepository";
import { LoginController } from './LoginController';
import { LoginUseCase } from './LoginUseCase';

const mongodbAuthRepository = new MongodbAuthRepository();

const loginUseCase = new LoginUseCase(
    mongodbAuthRepository
)

const loginController = new LoginController(
    loginUseCase
)

export { loginUseCase, loginController }