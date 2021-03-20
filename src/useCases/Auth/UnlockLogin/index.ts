import { MongodbAuthRepository } from "../../../repositories/implementations/MongodbAuthRepository";
import { UnloackLoginController } from '../UnlockLogin/UnloackLoginController';
import { UnloackLoginUseCase } from '../UnlockLogin/UnloackLoginUseCase'; 

const mongodbAuthRepository = new MongodbAuthRepository();

const unloackLoginUseCase = new UnloackLoginUseCase(
    mongodbAuthRepository,
)

const unloackLoginController = new UnloackLoginController(
    unloackLoginUseCase,
)

export { unloackLoginUseCase, unloackLoginController }

