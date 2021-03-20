import { MongodbAuthRepository } from "../../../repositories/implementations/MongodbAuthRepository";
import { updateUserUseCase } from "../../Users/Update";
import { UpdatePasswordController } from "./UpdatePasswordController"
import { UpdatePasswordUseCase } from "./UpdatePasswordUseCase"

const mongodbAuthRepository = new MongodbAuthRepository();

const updatePasswordUsecase = new UpdatePasswordUseCase(
    mongodbAuthRepository,
)

const updatePassorwdController = new UpdatePasswordController(
    updatePasswordUsecase,
)

export { updatePasswordUsecase, updatePassorwdController }