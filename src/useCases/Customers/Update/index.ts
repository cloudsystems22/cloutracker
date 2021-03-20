import { MongodbCustomerRepository } from "../../../repositories/implementations/MongodbCustomerRepository";
import { UpdateCustomerController } from "./UpdateCustomerController";
import { UpdateCustomerUseCase } from "./UpdateCustomerUseCase";

const mongodbCustomerRepository = new MongodbCustomerRepository();

const updateCustomerUseCase = new UpdateCustomerUseCase(
    mongodbCustomerRepository,
)

const updateCustomerController = new UpdateCustomerController(
    updateCustomerUseCase
)

export { updateCustomerUseCase, updateCustomerController }