import { UmblerMailProvider } from "../../../providers/implementations/UmblerMailProvider";
import { TwilioSmsProvider } from "../../../providers/implementations/TwilioSmsProvider";
import { MongodbUserRepository } from "../../../repositories/implementations/MongodbUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const mongodbUserRepository = new MongodbUserRepository();
const umblerMailProvider = new UmblerMailProvider();
const twilioSmsProvider = new TwilioSmsProvider();

const createUserUseCase = new CreateUserUseCase(
    mongodbUserRepository,
    umblerMailProvider,
    twilioSmsProvider
)

const createUserController = new CreateUserController(
    createUserUseCase
)

export { createUserUseCase, createUserController }
