import { MongodbCustomerRepository } from "../../../repositories/implementations/MongodbCustomerRepository";
import { SearchCustomerController } from "./SearchCustomerController";
import { SearchCustomerUseCase } from "./SearchCustomerUseCase";

const mongodbCustomerRepository = new MongodbCustomerRepository()

const searchCustomerUseCase = new SearchCustomerUseCase(
    mongodbCustomerRepository
)

const searchCustomerController = new SearchCustomerController(
    searchCustomerUseCase
)

export { searchCustomerUseCase, searchCustomerController }