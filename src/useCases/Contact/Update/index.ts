import { MongodbCustomerRepository } from "../../../repositories/implementations/MongodbCustomerRepository";
import { UpdateContatosController } from "./UpdateContatosController";
import { UpdateContatosUseCase } from "./UpdateContatosUseCase";

const mongodbCustomerRepository = new MongodbCustomerRepository

const updateContatosUseCase = new UpdateContatosUseCase(
    mongodbCustomerRepository,
)

const updateContatosController = new UpdateContatosController(
    updateContatosUseCase,
)

export { updateContatosUseCase, updateContatosController }