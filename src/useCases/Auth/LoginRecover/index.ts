import { UmblerMailProvider } from "../../../providers/implementations/UmblerMailProvider";
import { MongodbAuthRepository } from "../../../repositories/implementations/MongodbAuthRepository";
import { LoginRecoverController } from './LoginRecoverController'
import { LoginRecoverUseCase } from './LoginRecoverUseCase'

const mongodbAuthRepository = new MongodbAuthRepository();
const umblerMailProvider = new UmblerMailProvider();

const loginRecoverUseCase = new LoginRecoverUseCase(
    mongodbAuthRepository,
    umblerMailProvider
)

const loginRecoverController = new LoginRecoverController(
    loginRecoverUseCase
)

export { loginRecoverUseCase, loginRecoverController }