import { MongodbCustomerRepository } from "../../../repositories/implementations/MongodbCustomerRepository";
import { CreateCustomerController } from "./CreateCustomerController";
import { CreateCustomerUseCase } from "./CreateCustomerUseCase";

const mongodbCustomerRepository = new MongodbCustomerRepository();

const createCustomerUseCase = new CreateCustomerUseCase(
    mongodbCustomerRepository,
)

const createCustomerController = new CreateCustomerController(
    createCustomerUseCase
)

export { createCustomerUseCase, createCustomerController }