import { MongodbCustomerRepository } from "../../../repositories/implementations/MongodbCustomerRepository";
import { CreateContatosController } from "./CreateContatosController";
import { CreateContatosUseCase } from "./CreateContatosUseCase";

const mongodbCustomerRepository = new MongodbCustomerRepository();

const createContatosUseCase = new CreateContatosUseCase(
    mongodbCustomerRepository,
)

const createContatosController = new CreateContatosController(
    createContatosUseCase
)

export { createContatosUseCase, createContatosController }