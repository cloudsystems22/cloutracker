import { MongodbCustomerRepository } from "../../../repositories/implementations/MongodbCustomerRepository";
import { ShowCustomerController } from "./ShowCustomerController";
import { ShowCustomerUseCase } from "./ShowCustomerUseCase";

const mongodbCustomerRepository = new MongodbCustomerRepository()

const showCustomerUseCase = new ShowCustomerUseCase(
    mongodbCustomerRepository
)

const showCustomerController = new ShowCustomerController(
    showCustomerUseCase
)

export { showCustomerUseCase, showCustomerController }